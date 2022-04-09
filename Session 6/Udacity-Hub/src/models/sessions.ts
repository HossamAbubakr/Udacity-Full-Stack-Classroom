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
}
