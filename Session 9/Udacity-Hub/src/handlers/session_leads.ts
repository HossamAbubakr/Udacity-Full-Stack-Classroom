import { Lead, LeadModel } from '../models/session_leads';
import express, { Request, Response } from 'express';
import { Verify, Sign } from '../helpers/jwtHelper';

const sessionLeads = new LeadModel();

const index = async (req: Request, res: Response) => {
  try {
    Verify(req);
    const users = await sessionLeads.index();
    res.send(users);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to get the session leads')) {
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
    Verify(req, id);
    const lead = await sessionLeads.show(id);
    res.send(lead);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to get the session lead')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .send(
          'Error, missing or malformed parameters. name, email, password required'
        );
    }
    const lead: Lead = { name, email, password };
    const newLead = await sessionLeads.create(lead);
    const token = Sign(Number(newLead.id));
    res.send(token);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to add the session lead')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { id, password } = req.body;
    if (!id || !password) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id, password required');
    }
    Verify(req, id);
    const updatedLead = await sessionLeads.update(id, password);
    res.send(updatedLead);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to update session lead')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    if (!id) {
      return res
        .status(400)
        .send('Error, missing or malformed parameters. id required');
    }
    Verify(req, id);
    const deletedLead = await sessionLeads.delete(id);
    res.send(deletedLead);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to delete session lead')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const authenticate = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .send('Error, missing or malformed parameters. email, password required');
  }
  try {
    const lead = await sessionLeads.authenticate(email, password);
    if (lead === null) {
      res.status(401);
      res.json('Incorrect user information');
    } else {
      var token = Sign(Number(lead.id));
      res.json(token);
    }
  } catch (error) {
    const e = error as Error;
    res.status(401).send(e.message);
  }
};

const leads_routes = (app: express.Application) => {
  app.get('/leads', index);
  app.get('/leads/:id', show);
  app.post('/leads', create);
  app.put('/leads', update);
  app.delete('/leads', destroy);
  app.post('/leads/login', authenticate);
};

export default leads_routes;
