const { Pool } = require("pg");
module.exports = app => {
  return new Pool({
    user: "yourcity",
    host: "localhost",
    database: "yourcity",
    password: "yourcity",
    port: 5432
  });
};
