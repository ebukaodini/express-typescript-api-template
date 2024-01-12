import express from "express";
import userRoutes from "./users.routes";

const indexRoute = express.Router();

indexRoute.get("/", (_req, res, _next) => {
  res.success("Welcome!");
});

export const v1Routes = [indexRoute, userRoutes];
