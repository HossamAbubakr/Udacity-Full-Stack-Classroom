import client from '../database';

export type Student = {
  id: number;
  name: string;
};

export class StudentsModel {
  async index(): Promise<Student[]> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM students';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(
        `Failed to get the students with the following error: ${error}`
      );
    }
  }
  async show(id: number): Promise<Student> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM students WHERE id=($1)';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to get the student with the following error: ${error}`
      );
    }
  }
  async create(name: string): Promise<Student> {
    try {
      const connection = await client.connect();
      const sql = 'INSERT INTO students (name) VALUES($1) RETURNING *';
      const result = await connection.query(sql, [name]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to add the student with the following error: ${error}`
      );
    }
  }

  async update(st: Student): Promise<Student> {
    try {
      const connection = await client.connect();
      const sql = 'UPDATE students SET name=($1) WHERE id=($2) RETURNING *';
      const result = await connection.query(sql, [st.name, st.id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to update student with the following error: ${error}`
      );
    }
  }
}
