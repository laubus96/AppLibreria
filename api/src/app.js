import express from "express";
import morgan from "morgan";
import config from "./config";
import bookRouters from "./routes/Book.routes";
import authRouters from "./routes/Auth.routes";
import userRouter from "./routes/User.routes";
import { createRol } from "./libs/initialSeptup";

import cors from "cors";

const app = express();
createRol();

app.set("port", config.PORT);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bookRouters);
app.use("/api/auth", authRouters);
app.use(userRouter);

export default app;
