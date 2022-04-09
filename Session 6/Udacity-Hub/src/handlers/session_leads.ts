import { Lead, LeadModel } from '../models/session_leads';
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

const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const lead = await sessionLeads.show(id);
    res.send(lead);
  } catch (error) {
    res.status(500).json(error);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newLead = await sessionLeads.create(name);
    res.send(newLead);
  } catch (error) {
    res.status(500).json(error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;
    const lead: Lead = { id, name };
    const updatedLead = await sessionLeads.update(lead);
    res.send(updatedLead);
  } catch (error) {
    res.status(500).json(error);
  }
};

const leads_routes = (app: express.Application) => {
  app.get('/leads', index);
  app.get('/leads/:id', show);
  app.post('/leads', create);
  app.put('/leads', update);
};

export default leads_routes;
