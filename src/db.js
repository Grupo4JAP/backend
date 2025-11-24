const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: process.env.DB_HOST || "mariadb",
    user: process.env.DB_USER || "admin",
    password: process.env.DB_PASSWORD || "admin123",
    database: process.env.DB_NAME || "ecommerce",
});

module.exports = db;
