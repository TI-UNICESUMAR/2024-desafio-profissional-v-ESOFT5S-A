import { Router, Response, Request, NextFunction } from 'express';
import { userRoutes } from './src/domain/routes/user.router';
import { taskRoutes } from './src/domain/routes/task.router';
import { categoryRoutes } from './src/domain/routes/category.router';
import { ErrorMiddleware } from './src/domain/middlewares/error';

const errorMiddleware: ErrorMiddleware = new ErrorMiddleware();

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/tasks', taskRoutes);
routes.use('/categories', categoryRoutes);
routes.use(errorMiddleware.catchError.bind(errorMiddleware))

export {
    routes
}