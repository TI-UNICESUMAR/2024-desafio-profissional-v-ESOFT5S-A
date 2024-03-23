import { Router } from 'express';
import { userRoutes } from './src/domain/routes/user.router';
import { taskRoutes } from './src/domain/routes/task.router';
import { categoryRoutes } from './src/domain/routes/category.router';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/tasks', taskRoutes);
routes.use('/categories', categoryRoutes);

export {
    routes
}