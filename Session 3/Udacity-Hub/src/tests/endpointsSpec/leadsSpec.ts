import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Testing the leads endpoint', () => {
  it('Using the endpoint without providing the name parameter returns 400', async () => {
    await request.get('/leads').expect(400);
  });

  it('Using the endpoint with a non-existent lead returns 404', async () => {
    await request.get('/leads?name=Ali').expect(404);
  });

  it('Using the endpoint with a valid lead that does not have a photo returns 404', async () => {
    await request.get('/leads?name=Hasan').expect(404);
  });

  it('Using the endpoint with a valid lead returns 200', async () => {
    await request.get('/leads?name=Hossam').expect(200);
  });
});
