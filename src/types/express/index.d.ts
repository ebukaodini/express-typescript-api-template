declare namespace Express {
  interface Request {
    context: any;
    updateContext: (data: any) => any;
  }
  interface Response {
    success: (
      message: string,
      data?: any,
      statusCode?: number
    ) => Response<any, Record<string, any>>;
    error: (
      message: string,
      errors?: any,
      statusCode?: number
    ) => Response<any, Record<string, any>>;
  }
}
