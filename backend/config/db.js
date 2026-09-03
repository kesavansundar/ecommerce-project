const mysql = require("mysql2/promise");

console.log("DB CONFIG CHECK:", {
  host: process.env.DB_HOST || "MISSING",
  user: process.env.DB_USER || "MISSING",
  database: process.env.DB_NAME || "MISSING",
  port: process.env.DB_PORT || "MISSING",
  password: process.env.DB_PASSWORD ? "SET" : "MISSING",
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT || 3306),
});

const connectDB = async () => {
  try {
    const connection = await pool.getConnection();

    console.log("MySQL connected successfully");

    connection.release();
  } catch (error) {
    console.error("MySQL connection error FULL:", error);
  }
};

module.exports = {
  pool,
  connectDB,
};