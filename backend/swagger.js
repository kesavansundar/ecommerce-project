const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "E-Commerce API",
      version: "1.0.0",
      description: "Backend API for E-Commerce application",
    },

    servers: [
      {
        url: "https://ecommerce-project-5ybb.onrender.com/",
      },
    ],
  },

  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;