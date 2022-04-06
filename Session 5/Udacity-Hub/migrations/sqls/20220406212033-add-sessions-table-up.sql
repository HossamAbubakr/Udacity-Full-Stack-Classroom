CREATE TABLE IF NOT EXISTS sessions (
    id SERIAL PRIMARY KEY,
    date DATE,
    title VARCHAR(150),
    sl_id INTEGER REFERENCES session_leads(id) ON DELETE CASCADE
);