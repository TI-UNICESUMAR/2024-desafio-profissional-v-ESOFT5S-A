import { Router } from "express";
import { TaskController } from "../controller/task.controller";
import { TaskRepository } from "../repository/task.repository";
import { TaskService } from "../service/task.service";

const taskRoutes = Router()

const taskRepository: TaskRepository = new TaskRepository();
const taskService: TaskService = new TaskService(taskRepository);
const taskController: TaskController = new TaskController(taskService);

taskRoutes.post('', taskController.create.bind(taskController))
taskRoutes.get('/:id', taskController.findById.bind(taskController))
taskRoutes.get('', taskController.findAll.bind(taskController))
taskRoutes.put('/:id', taskController.update.bind(taskController))
taskRoutes.delete('/:id', taskController.delete.bind(taskController))

export { taskRoutes }