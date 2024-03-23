import { Request, Response } from 'express'
import { StatusCode } from "../enums/status.code";
import { CategoryDTO } from '../dtos/category.dto';
import { TaskService } from '../service/task.service';
import { Task } from '../types/task';
import { CreateTaskDTO } from '../dtos/create-task.dto';

export class TaskController {

    private readonly service: TaskService

    constructor(service: TaskService) {
        this.service = service;
    }

    public async findAll(request: Request, response: Response): Promise<void> {
        const tasks: Task[] = await this.service.findAll();

        response.status(StatusCode.SUCCESS).send(tasks);

    }

    public async findById(request: Request, response: Response): Promise<void> {
        const idTask: string = request.params.id;

        const foundTask: Task | null = await this.service.findById(idTask);
        response.status(StatusCode.SUCCESS).send(foundTask);

    }   

    public async create(request: Request, response: Response): Promise<void> {
        const task: CreateTaskDTO = request.body;

        this.service.create(task)
        response.status(StatusCode.CREATED).send()

    }

    public async update(request: Request, response: Response): Promise<void> {
        const idTask: string = request.params.id
        const task: CreateTaskDTO = request.body

        this.service.update(idTask, task)
        response.status(StatusCode.SUCCESS).send()

    }

    public async delete(request: Request, response: Response): Promise<void> {
        const idTask: string = request.params.id

        this.service.delete(idTask)
        response.status(StatusCode.NO_CONTENT).send()

    }

}