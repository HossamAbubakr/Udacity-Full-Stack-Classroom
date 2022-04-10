/* >>>>>>>>> PSQL Initial configuration */

    /* Download & Install PostgreSQL https://www.postgresql.org/download */
    /* Add PSQL to PATH https://sqlbackupandftp.com/blog/setting-windows-path-for-postgres-tools */

    /* Login to PSQL as postgres user */
    psql -U postgres

    /* Create a new database */
    CREATE DATABASE udacity_hub;

    /* Connect to the new database */
    \c udacity_hub;

    /* Create the session leads table */
    CREATE TABLE session_leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL
    );

    /* Create the student table */
    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL
    );

    /* Create a one to many relationship between the session_leads and students tables */
    ALTER TABLE students ADD COLUMN sl_id INTEGER REFERENCES session_leads(id);

    /* Insert some data into the session_leads table */
    INSERT INTO session_leads (name) VALUES ('Hossam Abubakr');

    /* Insert some data into the students table */
    INSERT INTO students (name, sl_id) VALUES ('Ahmed Ali', 1);