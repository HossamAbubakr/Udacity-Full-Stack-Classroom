CREATE TABLE IF NOT EXISTS student_sessions (
    id SERIAL PRIMARY KEY,
    session_id INTEGER REFERENCES sessions(id),
    student_id INTEGER REFERENCES students(id)
);