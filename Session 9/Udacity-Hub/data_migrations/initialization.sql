/* Populate The Session Leads Table */
INSERT INTO session_leads (name, email, password) VALUES ('Hossam Abubakr', 'hossam@mail.com', '$2b$10$2dTaHEa2QPzJO7gRXKiweuM8/cLapX6cKzQPierKhU7.dj2j4IKp.'); /* pass before hashing: pass123 */
INSERT INTO session_leads (name, email, password) VALUES ('Mohammed Elzanaty', 'zanaty@mail.com', '$2b$10$f.k8.AT.U3Zy0pPXjwVGje0W2jy3/VfNUpMDYpw718dpvYXymJKFG'); /* pass before hashing: 123456 */
INSERT INTO session_leads (name, email, password) VALUES ('Amr Hassan', 'amr@mail.com', '$2b$10$9XlShxGKgSG1CvYQIVaJv.2dpqUDuXIKhJtbIFJR.GE.MHU8j4wKG'); /* pass before hashing: 112233 */
INSERT INTO session_leads (name, email, password) VALUES ('Ziyad Khalil', 'ziyad@mail.com', '$2b$10$Q1xUHTkb.1tP559tmVKU2ur6n4ZSf1b7wxJeLNzNLyStkEIFEcJc6'); /* pass before hashing: abc123 */

/* Populate The Students Table */
INSERT INTO students (name) VALUES ('Ahmed Abdel-Gawad');
INSERT INTO students (name) VALUES ('Andrew Samir');
INSERT INTO students (name) VALUES ('Mohamed Ahmed');
INSERT INTO students (name) VALUES ('Nadine Bakr');
INSERT INTO students (name) VALUES ('Reem Abdel-Rahman');

INSERT INTO students (name) VALUES ('Farouk Ibrahim');
INSERT INTO students (name) VALUES ('Mahmoud Hafez');
INSERT INTO students (name) VALUES ('Peter Safwat');
INSERT INTO students (name) VALUES ('Youssef Mahmoud');
INSERT INTO students (name) VALUES ('Zyad Tarek');

INSERT INTO students (name) VALUES ('Abdel-Rahman Mohammed');
INSERT INTO students (name) VALUES ('Haitham Mahmoud');
INSERT INTO students (name) VALUES ('Lobna ali');
INSERT INTO students (name) VALUES ('Shady Alfred');
INSERT INTO students (name) VALUES ('Youssef Attai');

INSERT INTO students (name) VALUES ('Mark Ameen');
INSERT INTO students (name) VALUES ('Heba Mohamed');
INSERT INTO students (name) VALUES ('Omar Hasan');
INSERT INTO students (name) VALUES ('Salma Ahmed');
INSERT INTO students (name) VALUES ('Mabrouk Omar');

/* Populate The Sessions Table */
INSERT INTO sessions (date, title, sl_id) VALUES ('2021-12-11', 'Intro into TypeScript', 1);
INSERT INTO sessions (date, title, sl_id) VALUES ('2021-12-18', 'TypeScript in depth', 1);
INSERT INTO sessions (date, title, sl_id) VALUES ('2021-12-25', 'TypeScript Project', 1);
INSERT INTO sessions (date, title, sl_id) VALUES ('2022-01-01', 'Intro into PostgreSQL', 1);
INSERT INTO sessions (date, title, sl_id) VALUES ('2022-01-08', 'API creation in depth', 1);

/* Populate The Students-Sessions Table */
INSERT INTO student_sessions (session_id, student_id) VALUES (1,1);
INSERT INTO student_sessions (session_id, student_id) VALUES (1,2);
INSERT INTO student_sessions (session_id, student_id) VALUES (1,3);
INSERT INTO student_sessions (session_id, student_id) VALUES (1,4);

INSERT INTO student_sessions (session_id, student_id) VALUES (2,2);
INSERT INTO student_sessions (session_id, student_id) VALUES (2,3);
INSERT INTO student_sessions (session_id, student_id) VALUES (2,5);

INSERT INTO student_sessions (session_id, student_id) VALUES (3,1);
INSERT INTO student_sessions (session_id, student_id) VALUES (3,2);
INSERT INTO student_sessions (session_id, student_id) VALUES (3,3);
INSERT INTO student_sessions (session_id, student_id) VALUES (3,5);

INSERT INTO student_sessions (session_id, student_id) VALUES (4,1);
INSERT INTO student_sessions (session_id, student_id) VALUES (4,2);
INSERT INTO student_sessions (session_id, student_id) VALUES (4,4);

INSERT INTO student_sessions (session_id, student_id) VALUES (5,1);
INSERT INTO student_sessions (session_id, student_id) VALUES (5,2);
INSERT INTO student_sessions (session_id, student_id) VALUES (5,3);
INSERT INTO student_sessions (session_id, student_id) VALUES (5,4);
INSERT INTO student_sessions (session_id, student_id) VALUES (5,5);


