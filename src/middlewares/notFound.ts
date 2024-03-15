import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export function notFound(req: Request, res: Response, next: NextFunction) {
  next(createHttpError(404));
}
