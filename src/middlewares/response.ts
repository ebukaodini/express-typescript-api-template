import { Request, Response, NextFunction } from "express";
import { HttpStatusCode } from "axios";
import IResponse from "../interfaces/IResponse";

/**
 * Use the custom response middleware to extend express response object.
 */
export const response = (_req: Request, res: Response, next: NextFunction) => {
  /**
   * Returns a success response
   * @param message response message
   * @param data response data
   * @param statusCode response status code. Defaults to 200
   * @returns Response
   */
  res.success = function (
    message: string,
    data: any,
    statusCode: number = HttpStatusCode.Ok
  ): Response<IResponse> {
    return this.status(statusCode).json({
      message: message,
      ...{ data },
    });
  };

  /**
   * Returns a error response
   * @param message response message
   * @param errors response error data
   * @param statusCode response status code. Defaults to 400
   * @returns Response
   */
  res.error = function (
    message: string,
    errors: any,
    statusCode: number = HttpStatusCode.BadRequest
  ): Response<IResponse> {
    return this.status(statusCode).json({
      message: message,
      ...{ errors },
    });
  };

  next();
};
