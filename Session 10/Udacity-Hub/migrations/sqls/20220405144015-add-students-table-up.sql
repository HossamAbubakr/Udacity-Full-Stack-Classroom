CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    sl_id integer NOT NULL REFERENCES session_leads(id)
);