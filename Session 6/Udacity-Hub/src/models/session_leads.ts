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

  async show(id: number): Promise<Lead> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM session_leads WHERE id=($1)';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to get the session lead with the following error: ${error}`
      );
    }
  }

  async create(name: string): Promise<Lead> {
    try {
      const connection = await client.connect();
      const sql = 'INSERT INTO session_leads (name) VALUES($1) RETURNING *';
      const result = await connection.query(sql, [name]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to add the session lead with the following error: ${error}`
      );
    }
  }

  async update(sl: Lead): Promise<Lead> {
    try {
      const connection = await client.connect();
      const sql =
        'UPDATE session_leads SET name=($1) WHERE id=($2) RETURNING *';
      const result = await connection.query(sql, [sl.name, sl.id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to update session lead with the following error: ${error}`
      );
    }
  }
}
