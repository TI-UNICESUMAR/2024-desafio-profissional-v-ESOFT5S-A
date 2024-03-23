import { StatusCode } from "../../enums/status.code";
import { IError } from "../../interfaces/error";

export class ApiError extends Error implements IError {

    private readonly _statusCode: StatusCode;

    constructor(message: string, statusCode: StatusCode) {
        super(message)
        this._statusCode = statusCode;
    }

    get statusCode(): StatusCode {
        return this._statusCode;
    }

}