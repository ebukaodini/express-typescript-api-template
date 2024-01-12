import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import StatusCode from "status-code-enum";
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
      err.statusCode === StatusCode.ServerErrorInternal
        ? "Server Error! Please try again."
        : err.message,
    ...(process.env.NODE_ENV !== "production" && {
      error: err,
      stack: err.stack,
    }),
  });
}
