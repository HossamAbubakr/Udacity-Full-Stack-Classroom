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

const students_routes = (app: express.Application) => {
  app.get('/students', index);
};

export default students_routes;
