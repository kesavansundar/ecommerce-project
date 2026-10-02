require("dotenv").config();

const { pool } = require("./config/db");

async function testDatabase() {
  try {
    const [rows] = await pool.query("SELECT 1 + 2 AS three");

    console.log("Database test result:", rows);

    await pool.end();
  } catch (error) {
    console.error("Database test failed:", error.message);
  }
}

testDatabase();