import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { HttpStatusCode } from "axios";
import ErrorResponse from "../interfaces/IError";

export function errorHandler(
  err: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response<ErrorResponse> {
  console.error("🚨", err);

  return res.status(err.statusCode).json({
    message:
      err.statusCode === HttpStatusCode.InternalServerError
        ? "Server Error! Please try again."
        : err.message,
    ...(process.env.NODE_ENV !== "production" && {
      error: err,
      stack: err.stack,
    }),
  });
}
