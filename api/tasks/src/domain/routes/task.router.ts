import { Router } from "express";
import { TaskController } from "../controller/task.controller";
import { TaskRepository } from "../repository/task.repository";
import { TaskService } from "../service/task.service";

const taskRoutes = Router()

const taskRepository: TaskRepository = new TaskRepository();
const taskService: TaskService = new TaskService(taskRepository);
const taskController: TaskController = new TaskController(taskService);

taskRoutes.post('', taskController.create.bind(taskController))
taskRoutes.get('', taskController.findAll.bind(taskController))
taskRoutes.get('/completed/avg', taskController.findByCompletedAvg.bind(taskController))
taskRoutes.get('/description/bigger', taskController.findByDescriptionBigger.bind(taskController))
taskRoutes.get('/category/group', taskController.findAndGroupByCategory.bind(taskController))
taskRoutes.get('/period', taskController.findAllByPeriodDateConclusion.bind(taskController))
taskRoutes.get('/:id', taskController.findById.bind(taskController))
taskRoutes.get('/user/:id', taskController.findAllByUser.bind(taskController))
taskRoutes.get('/user/:id/count', taskController.countByUser.bind(taskController))
taskRoutes.get('/user/:id/first', taskController.findFirstByUser.bind(taskController))
taskRoutes.get('/user/:id/last', taskController.findLastByUser.bind(taskController))
taskRoutes.get('/category/:id', taskController.findAllByCategory.bind(taskController))
taskRoutes.get('/status/:status', taskController.findAllByStatus.bind(taskController))
taskRoutes.put('/:id', taskController.update.bind(taskController))
taskRoutes.delete('/:id', taskController.delete.bind(taskController))

export { taskRoutes }