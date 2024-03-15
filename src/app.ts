import "reflect-metadata";
import express, { Application } from "express";
import path from "path";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import * as dotenv from "dotenv";
import { v1Routes } from "./routes";
import { errorHandler, notFound, request, response } from "./middlewares";

// configure environment
process.env.NODE_ENV! === "test"
  ? dotenv.config({ path: path.resolve(process.cwd(), ".env.test") })
  : dotenv.config({ path: path.resolve(process.cwd(), ".env") });

// create express app
const app: Application = express();

// integrate middlewares
app.use(request);
app.use(response);
app.use(logger("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// define routes
app.use("/api/v1", v1Routes);

// catch 404 and forward to error handler
app.use(notFound);
// error handler
app.use(errorHandler);

export default app;
