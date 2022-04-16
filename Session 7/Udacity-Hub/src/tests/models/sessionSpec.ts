import { Session, SessionModel } from '../../models/sessions';
import { LeadModel } from '../../models/session_leads';

const sessionModel = new SessionModel();
const leadModel = new LeadModel();
const baseSession: Session = {
  date: '12/12/2012',
  title: 'Test Session',
  sl_id: 0,
};
let session: Session;

describe('Testing Model: session', () => {
  beforeAll(async () => {
    const lead = await leadModel.create({
      name: 'C-3PO',
      email: 'C@3PO.com',
      password: 'beep-boop',
    });
    if (lead.id) baseSession.sl_id = lead.id;
  });
  it('Must have a create method', () => {
    expect(sessionModel.create).toBeDefined();
  });

  it('Testing the create model with a session', async () => {
    session = await sessionModel.create(baseSession);
    expect({
      title: session.title,
      sl_id: session.sl_id,
    }).toEqual({
      title: baseSession.title,
      sl_id: baseSession.sl_id,
    });
  });

  it('Must have an index method', () => {
    expect(sessionModel.index).toBeDefined();
  });

  it('Must have a show method', () => {
    expect(sessionModel.show).toBeDefined();
  });

  it('Must have an update method', () => {
    expect(sessionModel.update).toBeDefined();
  });

  it('Testing the update model to return the updated session', async () => {
    const updatedSession = await sessionModel.update({
      ...session,
      title: 'Test session 2',
    });
    expect(updatedSession.title).toEqual('Test session 2');
  });

  it('Must have a delete method', () => {
    expect(sessionModel.delete).toBeDefined();
  });

  it('Testing the delete model to return the deleted session', async () => {
    const deletedSession = await sessionModel.delete(session.id as number);
    expect(deletedSession.id).toEqual(session.id);
  });
});
