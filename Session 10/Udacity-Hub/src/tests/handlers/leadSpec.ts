import supertest from 'supertest';
import app from '../../index';
import { JwtPayload, verify } from 'jsonwebtoken';
import { Lead } from '../../models/session_leads';

const request = supertest(app);
describe('Testing Endpoint: /leads', () => {
  const lead: Lead = {
    name: 'ATD Dummy',
    email: 'ATD@Dummy.com',
    password: 'Password',
  };
  let token: string;
  let userId: string;
  it('Testing the create endpoint', async () => {
    await request
      .post('/leads')
      .send(lead)
      .expect(200)
      .then((res) => {
        token = res.text;
        const decodedJWT = verify(
          token as string,
          process.env.TOKEN_SECRET as string
        ) as JwtPayload;
        userId = decodedJWT.user.userId;
      });
  });

  it('Testing the index endpoint with valid token', async () => {
    await request
      .get('/leads')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('Testing the index endpoint with invalid token', async () => {
    await request
      .get('/leads')
      .set('Authorization', 'Bearer heyIamafaketoken')
      .expect(401);
  });

  it('Testing the read endpoint with valid token and valid lead ID', async () => {
    await request
      .get(`/leads/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('Testing the read endpoint with invalid token and invalid lead ID', async () => {
    await request
      .get('/leads/999')
      .set('Authorization', 'Bearer heyIamafaketoken')
      .expect(401);
  });

  it('Testing the authorization endpoint with valid lead', async () => {
    await request.post('/leads/login').send(lead).expect(200);
  });

  it('Testing the authorization endpoint with invalid lead', async () => {
    await request
      .post('/leads/login')
      .send({
        name: 'ATD Dummy',
        email: 'ATD@Dummy.com',
        password: 'Wrong Password',
      })
      .expect(401)
      .then((res) => {
        expect(res.text).toContain('Incorrect user information');
      });
  });

  it('Testing the update endpoint with different lead ID', async () => {
    await request
      .put('/leads')
      .set('Authorization', `Bearer ${token}`)
      .send({
        id: 999,
        password: lead.password,
      })
      .expect(401);
  });

  it('Testing the update endpoint with current lead ID', async () => {
    await request
      .put('/leads')
      .set('Authorization', `Bearer ${token}`)
      .send({
        id: userId,
        password: lead.password,
      })
      .expect(200);
  });

  it('Testing the delete endpoint with valid token and valid lead ID', async () => {
    await request
      .delete('/leads')
      .set('Authorization', `Bearer ${token}`)
      .send({ id: userId })
      .expect(200);
  });
});
