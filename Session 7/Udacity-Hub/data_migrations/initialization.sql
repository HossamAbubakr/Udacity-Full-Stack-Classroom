/* Populate The Session Leads Table */
INSERT INTO session_leads (name) VALUES ('Hossam Abubakr');
INSERT INTO session_leads (name) VALUES ('Mohammed Elzanaty');
INSERT INTO session_leads (name) VALUES ('Amr Hassan');
INSERT INTO session_leads (name) VALUES ('Ziyad Khalil');

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


