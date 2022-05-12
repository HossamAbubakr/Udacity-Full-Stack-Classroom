import supertest from 'supertest';
import app from '../../index';
import { Student } from '../../models/students';

const request = supertest(app);
describe('Testing Endpoint: /students', () => {
  const student: Student = {
    name: 'Padawan',
  };
  let token: string;
  let studentId: number;
  beforeAll(async () => {
    await request
      .post('/leads')
      .send({
        name: 'R5-D4',
        email: 'R5-D4@Dummy.com',
        password: 'Password',
      })
      .expect(200)
      .then((res) => {
        token = res.text;
      });
  });

  it('Testing the create endpoint with an invalid token', async () => {
    await request
      .post('/students')
      .send(student)
      .set('Authorization', 'Bearer heyIamafaketoken')
      .expect(401);
  });

  it('Testing the create endpoint with a valid token', async () => {
    await request
      .post('/students')
      .send(student)
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .then((res) => {
        studentId = res.body.id;
      });
  });

  it('Testing the index endpoint with valid token', async () => {
    await request
      .get('/students')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('Testing the index endpoint with invalid token', async () => {
    await request
      .get('/students')
      .set('Authorization', 'Bearer heyIamafaketoken')
      .expect(401);
  });

  it('Testing the read endpoint with valid token and valid student ID', async () => {
    await request
      .get(`/students/${studentId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('Testing the update endpoint with an invalid token', async () => {
    await request
      .put('/students')
      .set('Authorization', 'Bearer heyIamafaketoken')
      .send({ ...student, name: 'Darth Vader' })
      .expect(401);
  });

  it('Testing the update endpoint with a valid token', async () => {
    await request
      .put('/students')
      .set('Authorization', `Bearer ${token}`)
      .send({ ...student, name: 'Darth Vader' })
      .expect(200);
  });

  it('Testing the delete endpoint with valid token and valid student ID', async () => {
    await request
      .delete('/students')
      .set('Authorization', `Bearer ${token}`)
      .send({ id: studentId })
      .expect(200);
  });
});
