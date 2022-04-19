import { Student, StudentsModel } from '../models/students';
import express, { Request, Response } from 'express';
import { Verify } from '../helpers/jwtHelper';

const students = new StudentsModel();

const index = async (req: Request, res: Response) => {
  try {
    Verify(req);
    const users = await students.index();
    res.send(users);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to get the students')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const show = async (req: Request, res: Response) => {
  try {
    Verify(req);
    const id = Number(req.params.id);
    const user = await students.show(id);
    res.send(user);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to get the student')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const create = async (req: Request, res: Response) => {
  try {
    Verify(req);
    const { name } = req.body;
    const newUser = await students.create(name);
    res.send(newUser);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to add the student')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const update = async (req: Request, res: Response) => {
  try {
    Verify(req);
    const { id, name } = req.body;
    const student: Student = { id, name };
    const updatedUser = await students.update(student);
    res.send(updatedUser);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to update student')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    Verify(req);
    const id = req.body.id;
    const deletedUser = await students.delete(id);
    res.send(deletedUser);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes('Failed to delete student')) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};

const students_routes = (app: express.Application) => {
  app.get('/students', index);
  app.get('/students/:id', show);
  app.post('/students', create);
  app.put('/students', update);
  app.delete('/students', destroy);
};

export default students_routes;
