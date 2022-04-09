import { Session, SessionModel } from '../models/sessions';
import express, { Request, Response } from 'express';
const sessions = new SessionModel();

const index = async (req: Request, res: Response) => {
  try {
    const session = await sessions.index();
    res.send(session);
  } catch (error) {
    res.status(500).json(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const session = await sessions.show(id);
    res.send(session);
  } catch (error) {
    res.status(500).json(error);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { date, title, sl_id } = req.body;
    const session: Session = { date, title, sl_id };
    const newLead = await sessions.create(session);
    res.send(newLead);
  } catch (error) {
    res.status(500).json(error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { id, date, title, sl_id } = req.body;
    const session: Session = { id, date, title, sl_id };
    const updatedSession = await sessions.update(session);
    res.send(updatedSession);
  } catch (error) {
    res.status(500).json(error);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const deletedSession = await sessions.delete(id);
    res.send(deletedSession);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const sessions_routes = (app: express.Application) => {
  app.get('/sessions', index);
  app.get('/sessions/:id', show);
  app.post('/sessions', create);
  app.put('/sessions', update);
  app.delete('/sessions', destroy);
};

export default sessions_routes;
