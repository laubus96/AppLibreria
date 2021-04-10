import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_DATABASE: "biblioteca-databse",
  MONGO_HOTS: "localhost",
  MONGO_USER: "lau",
  MONGO_PASSWORD: "123",
  PORT: process.env.PORT,
  SECRET: "product-api",
};
