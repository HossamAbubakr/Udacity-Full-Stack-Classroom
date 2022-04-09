import { SessionModel } from '../models/sessions';
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

const sessions_routes = (app: express.Application) => {
  app.get('/sessions', index);
  app.get('/sessions/:id', show);
};

export default sessions_routes;
