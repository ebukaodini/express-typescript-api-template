import IResponse from "./IResponse";

export default interface IError extends IResponse {
  stack?: string;
}
