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

const sessions_routes = (app: express.Application) => {
  app.get('/sessions', index);
};

export default sessions_routes;
