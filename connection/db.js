// db.js
const postgres = require("postgres");
require('dotenv').config();

const sql = postgres("postgresql://neondb_owner:HcG6QJDjWu3m@ep-cool-dream-a5y5ch7l-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require", { ssl: "require" });

module.exports = sql;