import client from '../database';

export type Session = {
  id?: number;
  date: string;
  title: string;
  sl_id: number;
};

export class SessionModel {
  async index(): Promise<Session[]> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM sessions';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(
        `Failed to get the sessions with the following error: ${error}`
      );
    }
  }

  async show(id: number): Promise<Session> {
    try {
      const connection = await client.connect();
      const sql = `SELECT * FROM sessions WHERE id=(${id})`;
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to get the session with the following error: ${error}`
      );
    }
  }
}
