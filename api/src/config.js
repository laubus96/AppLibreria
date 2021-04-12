import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_DATABASE: "biblioteca-databse",
  MONGO_HOTS: "localhost",
  MONGO_USER: "lau",
  MONGO_PASSWORD: "123",
  PORT: process.env.PORT,
  SECRET: "product-api",
  USER_EMAIL: "laubus1234@gmail.com",
  USER_PASSWORD: "ABcd1234",
};
