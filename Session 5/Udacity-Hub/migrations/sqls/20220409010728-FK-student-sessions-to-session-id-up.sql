ALTER TABLE student_sessions  ADD COLUMN   session_id INTEGER  NOT NULL  REFERENCES sessions(id) ON DELETE CASCADE;
