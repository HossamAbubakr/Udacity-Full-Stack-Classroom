ALTER TABLE student_sessions  ADD COLUMN    student_id INTEGER  NOT NULL  REFERENCES students(id)ON DELETE CASCADE;
