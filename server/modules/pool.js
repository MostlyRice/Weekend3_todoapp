const pg = require('pg');
const Pool = pg.Pool;
// This configures our pool.  Only need to change database name:
const config = {
  database: 'taskmaster',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 5000 // 5 seconds
}
const pool = new Pool(config);

module.exports = pool;
