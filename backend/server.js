const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");



const app = express();

const allowedOrigin =
  "https://ecommerce-project-livid-eight.vercel.app";

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.get("/", (req, res) => {
  res.json({
    message: "E-Commerce API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});