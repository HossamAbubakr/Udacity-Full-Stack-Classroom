import supertest from 'supertest';
import app from '../../index';
import { Session } from '../../models/sessions';
import { JwtPayload, verify } from 'jsonwebtoken';

const request = supertest(app);
describe('Testing Endpoint: /sessions', () => {
  const session: Session = {
    date: '12/12/2012',
    title: 'Test Session',
    sl_id: 0,
  };

  let leadId: number;
  let sessionId: number;
  let studentId: number;
  let token: string;

  beforeAll(async () => {
    await request
      .post('/leads')
      .send({
        name: 'K-2SO',
        email: 'K-2SO@Dummy.com',
        password: 'Password',
      })
      .expect(200)
      .then((res) => {
        token = res.text;
        const decodedJWT = verify(
          token as string,
          process.env.TOKEN_SECRET as string
        ) as JwtPayload;
        leadId = decodedJWT.user.userId;
        session.sl_id = leadId;
      });

    await request
      .post('/students')
      .send({ name: 'Darth Maul' })
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .then((res) => {
        studentId = res.body.id;
      });
  });

  it('Testing the create endpoint with an invalid token', async () => {
    await request
      .post('/sessions')
      .send(session)
      .set('Authorization', 'Bearer heyIamafaketoken')
      .expect(401);
  });

  it('Testing the create endpoint with a valid token and mismatched lead', async () => {
    await request
      .post('/sessions')
      .send({ ...session, sl_id: 999 })
      .set('Authorization', `Bearer ${token}`)
      .expect(401);
  });

  it('Testing the create endpoint with a valid token and valid lead', async () => {
    await request
      .post('/sessions')
      .send(session)
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .then((res) => {
        sessionId = res.body.id;
      });
  });

  it('Testing the index endpoint with an invalid token', async () => {
    await request
      .get('/sessions')
      .set('Authorization', 'Bearer heyIamafaketoken')
      .expect(401);
  });

  it('Testing the index endpoint with a valid token', async () => {
    await request
      .get('/sessions')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('Testing the read endpoint with valid session ID', async () => {
    await request
      .get(`/sessions/${sessionId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('Testing the add session endpoint with invalid token', async () => {
    await request
      .post(`/sessions/${sessionId}/student`)
      .set('Authorization', 'Bearer heyIamafaketoken')
      .send({ student_id: studentId })
      .expect(401);
  });

  it('Testing the add session endpoint with valid token', async () => {
    await request
      .post(`/sessions/${sessionId}/student`)
      .set('Authorization', `Bearer ${token}`)
      .send({ student_id: studentId })
      .expect(200);
  });

  it('Testing the update endpoint with an invalid token', async () => {
    await request
      .put('/sessions')
      .set('Authorization', 'Bearer heyIamafaketoken')
      .send({
        id: sessionId,
        title: 'Updated Session',
        date: '12/12/2012',
        sl_id: leadId,
      })
      .expect(401);
  });

  it('Testing the update endpoint with a valid token', async () => {
    await request
      .put('/sessions')
      .set('Authorization', `Bearer ${token}`)
      .send({
        id: sessionId,
        title: 'Updated Session',
        date: '12/12/2012',
        sl_id: leadId,
      })
      .expect(200)
      .then((res) => {
        expect(res.body.title).toEqual('Updated Session');
      });
  });

  it('Testing the delete endpoint with valid token and invalid session ID', async () => {
    await request
      .delete('/sessions')
      .set('Authorization', 'Bearer heyIamafaketoken')
      .send({ id: 999 })
      .expect(401);
  });

  it('Testing the delete endpoint with valid token and valid session ID', async () => {
    await request
      .delete('/sessions')
      .set('Authorization', `Bearer ${token}`)
      .send({ id: sessionId })
      .expect(200);
  });
});
