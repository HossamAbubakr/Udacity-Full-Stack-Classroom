import { Student, StudentsModel } from '../../models/students';

const studentsModel = new StudentsModel();
const studentName: string = 'Luke Skywalker';
let student: Student;

describe('Testing Model: students', () => {
  it('Must have a create method', () => {
    expect(studentsModel.create).toBeDefined();
  });

  it('Testing the create model with a student', async () => {
    student = await studentsModel.create(studentName);
    expect(student.name).toEqual(studentName);
  });

  it('Must have an index method', () => {
    expect(studentsModel.index).toBeDefined();
  });

  it('Testing the index model to include the student', async () => {
    const students = await studentsModel.index();
    expect(students).toContain(student);
  });

  it('Must have a show method', () => {
    expect(studentsModel.show).toBeDefined();
  });

  it('Testing the show model to return the student', async () => {
    const foundStudents = await studentsModel.show(student.id as number);
    expect(foundStudents).toEqual(student);
  });

  it('Must have an update method', () => {
    expect(studentsModel.update).toBeDefined();
  });

  it('Testing the update model to return the updated student', async () => {
    const updatedStudent = await studentsModel.update({
      ...student,
      name: 'Anakin Skywalker',
    });
    expect({ ...student, name: 'Anakin Skywalker' }).toEqual(updatedStudent);
  });

  it('Must have a delete method', () => {
    expect(studentsModel.delete).toBeDefined();
  });

  it('Testing the delete model to return the deleted student', async () => {
    const deletedStudent = await studentsModel.delete(student.id as number);
    expect(deletedStudent.id).toEqual(student.id);
  });
});
