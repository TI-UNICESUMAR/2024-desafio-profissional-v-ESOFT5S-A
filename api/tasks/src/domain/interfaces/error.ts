import { StatusCode } from "../enums/status.code";

export interface IError {

    statusCode: StatusCode;
    message: string;

}