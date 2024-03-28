import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../enums/status.code';
import { IdParamSchema } from '../dtos/object.id';

export default class ValidationRequest {

    public static async body(request: Request, response: Response, next: NextFunction, body: any): Promise<void> {
        try {
            body.parse(request.body);
            next();
        } catch(error: any) {

            const formattedErrors = error.errors.map((err: any) => ({
                field: err.path.join('.'),
                type: err.code,
                expected: err.expected,
                received: err.received,
                message: err.message
            }));

            response.status(StatusCode.BAD_REQUEST).json({ errors: formattedErrors });
        }
    }

    public static async paramsId(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {

            IdParamSchema.parse(request.params);
            next();
        } catch(error: any) {

            const formattedErrors = error.errors.map((err: any) => ({
                param: err.path.join('.'),
                type: err.code,
                message: err.message
            }));

            response.status(StatusCode.BAD_REQUEST).json({ errors: formattedErrors });
        }
    }

}