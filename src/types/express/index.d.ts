declare namespace Express {
  interface Request {
    context: any;
  }
  interface Response {
    success: (
      message: string,
      data?: any,
      statusCode?: number
    ) => Response<any, MessageResponse>;
    error: (
      message: string,
      error?: any,
      statusCode?: number
    ) => Response<any, MessageResponse>;
  }
}
