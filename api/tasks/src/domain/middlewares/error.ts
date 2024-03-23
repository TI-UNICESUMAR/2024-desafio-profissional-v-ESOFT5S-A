import { NextFunction, Request, Response } from "express";
import { IError } from "../interfaces/error";
import { StatusCode } from "../enums/status.code";

export class ErrorMiddleware {

    public async catchError(error: IError, request: Request, response: Response, next: NextFunction): Promise<void> {

        const statusCode: number = error.statusCode || StatusCode.INTERNAL_SERVER_ERROR
        const message: string = error.message || 'Internal Server Error'
        
        response.status(statusCode).json({ message: message})

    }

}