import { CreateTaskDTO } from './../dtos/create-task.dto';
import { Task } from '../types/task';
import { TaskRepository } from './../repository/task.repository';

export class TaskService {

    private readonly repository: TaskRepository;

    constructor(repository: TaskRepository) {
        this.repository = repository;
    }

    public async findAll(): Promise<Task[]> {
        return this.repository.findAll()
    }

    public async findById(id: string): Promise<Task | null> {
        return this.repository.findById(id)
    }

    public async create(task: CreateTaskDTO): Promise<void> {        
        await this.repository.create(task)
    }

    public async update(id: string, task: CreateTaskDTO): Promise<void> {
        await this.repository.update(id, task)
    }

    public async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }

}