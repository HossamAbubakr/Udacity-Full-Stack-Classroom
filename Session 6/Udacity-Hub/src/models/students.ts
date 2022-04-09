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
}
