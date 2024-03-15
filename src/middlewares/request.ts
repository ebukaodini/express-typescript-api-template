import { Request, Response, NextFunction } from "express";

/**
 * Use the custom response middleware to extend express request object.
 */
export const request = (req: Request, _res: Response, next: NextFunction) => {
  /**
   * Updates req context
   * @param data context data
   * @returns any
   */
  req.updateContext = function (data: any): any {
    req.context = { ...req.context, ...data };
    return req.context;
  };

  next();
};
