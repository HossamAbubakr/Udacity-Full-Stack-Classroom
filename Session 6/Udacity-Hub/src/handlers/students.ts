import { StudentsModel } from '../models/students';
import express, { Request, Response } from 'express';
const students = new StudentsModel();

const index = async (req: Request, res: Response) => {
  try {
    const users = await students.index();
    res.send(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const user = await students.show(id);
    res.send(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newUser = await students.create(name);
    res.send(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const students_routes = (app: express.Application) => {
  app.get('/students', index);
  app.get('/students/:id', show);
  app.post('/students', create);
};

export default students_routes;
