import client from '../database';

export type Lead = {
  id?: number;
  name: string;
  email: string;
  password: string;
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

  async create(sl: Lead): Promise<Lead> {
    try {
      const connection = await client.connect();
      const sql =
        'INSERT INTO session_leads (name, email, password) VALUES($1, $2, $3) RETURNING *';
      const result = await connection.query(sql, [
        sl.name,
        sl.email,
        sl.password,
      ]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to add the session lead with the following error: ${error}`
      );
    }
  }

  async update(id: number, password: string): Promise<Lead> {
    try {
      const connection = await client.connect();
      const sql =
        'UPDATE session_leads SET password=($1) WHERE id=($2) RETURNING *';
      const result = await connection.query(sql, [password, id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to update session lead with the following error: ${error}`
      );
    }
  }

  async delete(id: number): Promise<Lead> {
    try {
      const connection = await client.connect();
      const sql = 'DELETE FROM session_leads WHERE id=($1) RETURNING *';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Failed to delete session lead with the following error: ${error}`
      );
    }
  }
}
