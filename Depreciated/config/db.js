const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'doadmin',
    host: 'db-postgresql-fra1-44008-do-user-12606102-0.b.db.ondigitalocean.com',
    database: 'defaultdb',
    password: 'AVNS_s2dowrn7lAHBki1YZwTt',
    port: 25060,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;