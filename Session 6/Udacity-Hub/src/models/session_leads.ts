import client from '../database';

export type Lead = {
  id?: number;
  name: string;
};

export class LeadModel {
  async index(): Promise<Lead[]> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM session_leads';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (error) {
      throw new Error(
        `Failed to get the session leads with the following error: ${error}`
      );
    }
  }
}
