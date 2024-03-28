import { Router } from "express";
import { TaskController } from "../controller/task.controller";
import { TaskRepository } from "../repository/task.repository";
import { TaskService } from "../service/task.service";
import ValidationRequest from "../middlewares/validation.request";
import { CreateTaskSchema } from "../dtos/create-task.dto";
import { UpdateTaskSchema } from "../dtos/update-task.dto";

const taskRoutes = Router()

const taskRepository: TaskRepository = new TaskRepository();
const taskService: TaskService = new TaskService(taskRepository);
const taskController: TaskController = new TaskController(taskService);

taskRoutes.post('', (req, res, next) => ValidationRequest.body(req, res, next, CreateTaskSchema), taskController.create.bind(taskController))
taskRoutes.get('', taskController.findAll.bind(taskController))
taskRoutes.get('/completed/avg', taskController.findByCompletedAvg.bind(taskController))
taskRoutes.get('/description/bigger', taskController.findByDescriptionBigger.bind(taskController))
taskRoutes.get('/category/group', taskController.findAndGroupByCategory.bind(taskController))
taskRoutes.get('/period', taskController.findAllByPeriodDateConclusion.bind(taskController))
taskRoutes.get('/:id', ValidationRequest.paramsId, taskController.findById.bind(taskController))
taskRoutes.get('/user/:id', ValidationRequest.paramsId, taskController.findAllByUser.bind(taskController))
taskRoutes.get('/user/:id/count', ValidationRequest.paramsId, taskController.countByUser.bind(taskController))
taskRoutes.get('/user/:id/first', ValidationRequest.paramsId, taskController.findFirstByUser.bind(taskController))
taskRoutes.get('/user/:id/last', ValidationRequest.paramsId, taskController.findLastByUser.bind(taskController))
taskRoutes.get('/category/:id', ValidationRequest.paramsId, taskController.findAllByCategory.bind(taskController))
taskRoutes.get('/status/:status', taskController.findAllByStatus.bind(taskController))
taskRoutes.put('/:id', ValidationRequest.paramsId, (req, res, next) => ValidationRequest.body(req, res, next, UpdateTaskSchema), taskController.update.bind(taskController))
taskRoutes.delete('/:id', ValidationRequest.paramsId, taskController.delete.bind(taskController))

export { taskRoutes }