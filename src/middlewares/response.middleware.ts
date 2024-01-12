import { Request, Response, NextFunction } from "express";
import { StatusCode } from "status-code-enum";
import IResponse from "../interfaces/IResponse";

/**
 * Use the custom response middleware to extend express response object.
 */
export const response = (req: Request, res: Response, next: NextFunction) => {
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
    statusCode: number = StatusCode.SuccessOK
  ): Response<IResponse> {
    return this.status(statusCode).json({
      message: message,
      ...(data !== undefined && { data: data }),
    });
  };

  /**
   * Returns a error response
   * @param message response message
   * @param error response error data
   * @param statusCode response status code. Defaults to 400
   * @returns Response
   */
  res.error = function (
    message: string,
    error: any,
    statusCode: number = StatusCode.ClientErrorBadRequest
  ): Response<IResponse> {
    return this.status(statusCode).json({
      message: message,
      ...(error !== undefined && { error: error }),
    });
  };

  next();
};
