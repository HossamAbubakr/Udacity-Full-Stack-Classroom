import { Lead, LeadModel } from '../../models/session_leads';

const leadModel = new LeadModel();
const baseLead: Lead = {
  name: 'R2-D2',
  email: 'R2@D2.com',
  password: 'beep-boop',
};
let lead: Lead;
describe('Testing Model: session_leads', () => {
  it('Must have a create method', () => {
    expect(leadModel.create).toBeDefined();
  });
  it('Testing the create model with a lead', async () => {
    lead = await leadModel.create(baseLead);
    expect({ name: lead.name, email: lead.email }).toEqual({
      name: baseLead.name,
      email: baseLead.email,
    });
  });
  it('Must have an index method', () => {
    expect(leadModel.index).toBeDefined();
  });

  it('Testing the index model to include the lead', async () => {
    const leads = await leadModel.index();
    expect(leads).toContain(lead);
  });

  it('Must have a show method', () => {
    expect(leadModel.show).toBeDefined();
  });

  it('Testing the show model to return the lead', async () => {
    const foundLead = await leadModel.show(lead.id as number);
    expect(foundLead).toEqual(lead);
  });

  it('Must have an update method', () => {
    expect(leadModel.update).toBeDefined();
  });

  it('Testing the update model to return the updated lead', async () => {
    const upadedLead = await leadModel.update(
      lead.id as number,
      'this is a new password'
    );
    expect({ id: lead.id, password: 'this is a new password' }).toEqual({
      id: upadedLead.id,
      password: upadedLead.password,
    });
  });

  it('Must have a delete method', () => {
    expect(leadModel.delete).toBeDefined();
  });

  it('Testing the delete model to return the deleted lead', async () => {
    const deletedLead = await leadModel.delete(lead.id as number);
    expect(deletedLead.id).toEqual(lead.id);
  });
});
