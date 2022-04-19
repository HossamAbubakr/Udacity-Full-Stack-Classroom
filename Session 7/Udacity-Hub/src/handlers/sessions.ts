import { Session, SessionModel } from '../models/sessions';
import express, { Request, Response } from 'express';
import { Verify } from '../helpers/jwtHelper';

const sessions = new SessionModel();

const index = async (req: Request, res: Response) => {
  try {
    Verify(req);
    const session = await sessions.index();
    res.send(session);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to get the sessions')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!id) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id required');
    }
    const session = await sessions.show(id);
    Verify(req, session.sl_id); // Make sure the user is the lead of the session
    res.send(session);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to get the session')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { date, title, sl_id } = req.body;
    if (!date || !title || !sl_id) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. date, title, sl_id required'
        );
    }
    Verify(req, sl_id); // Make sure the user is adding a session to themselves
    const session: Session = { date, title, sl_id };
    const newLead = await sessions.create(session);
    res.send(newLead);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to add the session')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { id, date, title, sl_id } = req.body;
    if (!date || !title || !sl_id) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. date, title, sl_id required'
        );
    }
    Verify(req, sl_id);
    const session: Session = { id, date, title, sl_id };
    const updatedSession = await sessions.update(session);
    res.send(updatedSession);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to update session')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const id = Number(req.body.id);
    if (!id) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id required');
    }
    const session = await sessions.show(id);
    Verify(req, session.sl_id);
    const deletedSession = await sessions.delete(id);
    res.send(deletedSession);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to delete session')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const addStudent = async (req: Request, res: Response) => {
  try {
    const sessionId = Number(req.params.id);
    const studentId = req.body.student_id;
    if (!studentId) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. student_id required');
    }
    const session = await sessions.show(sessionId);
    Verify(req, session.sl_id);
    const studentSession = await sessions.addStudent(studentId, sessionId);
    res.send(studentSession);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Could not add student')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const sessions_routes = (app: express.Application) => {
  app.get('/sessions', index);
  app.get('/sessions/:id', show);
  app.post('/sessions', create);
  app.put('/sessions', update);
  app.delete('/sessions', destroy);
  app.post('/sessions/:id/student', addStudent);
};

export default sessions_routes;
