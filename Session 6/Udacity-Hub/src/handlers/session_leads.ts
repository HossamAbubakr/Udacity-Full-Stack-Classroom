import { LeadModel } from '../models/session_leads';
import express, { Request, Response } from 'express';
const sessionLeads = new LeadModel();

const index = async (req: Request, res: Response) => {
  try {
    const users = await sessionLeads.index();
    res.send(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

const leads_routes = (app: express.Application) => {
  app.get('/leads', index);
};

export default leads_routes;
