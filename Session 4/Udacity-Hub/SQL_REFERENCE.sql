/* >>>>>>>>> PSQL Initial configuration */

    /* Download & Install PostgreSQL https://www.postgresql.org/download */
    /* Add PSQL to PATH https://sqlbackupandftp.com/blog/setting-windows-path-for-postgres-tools */

    /* Login to PSQL as postgres user */
    psql -U postgres

    /* Create a new database */
    CREATE DATABASE udacity_hub;

    /* Connect to the new database */
    \c udacity_hub;