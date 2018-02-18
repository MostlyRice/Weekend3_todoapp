const pg = require('pg');
const Pool = pg.Pool;
// This configures our pool.  Only need to change database name:
 const config = {
   database: 'taskmaster', // change this for each app/   host: 'localhost',
   port: 5432,
   max: 10,
   idleTimeoutMillis: 5000 // 5 seconds
}

// create a pool
const pool = new Pool(config);

module.exports = pool;
