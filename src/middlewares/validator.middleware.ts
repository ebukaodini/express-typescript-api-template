import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { NextFunction, Request, Response } from "express";
import { ValidationGroup } from "../enums/ValidationGroup";

export function validator(dtoType: any, group?: ValidationGroup): any {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = plainToInstance(dtoType, req.body, {
      enableCircularCheck: true,
      ...(group && { groups: [group!] }),
    });

    const error = await validate(dtoInstance, {
      forbidUnknownValues: true,
      ...(group && { groups: [group!] }),
      validationError: {
        target: false,
        value: false,
      },
      stopAtFirstError: true,
      strictGroups: true,
    });

    // Handle validation error
    if (error.length > 0) {
      let errors: any = {};

      error
        .map((error) => {
          return {
            [error.property]: Object.values(error.constraints as any).flat(),
          };
        })
        .forEach((error) => {
          errors = {
            ...errors,
            [Object.keys(error)[0]]: Object.values(error)[0][0],
          };
        });

      return res.error("Validation failed", errors);
    }

    req.context = { ...req.context, validData: dtoInstance };
    next();
  };
}
