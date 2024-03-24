import taskModel from '../entity/task.schema'
import { Task } from '../types/task';
import { CreateTaskDTO } from '../dtos/create-task.dto';

export class TaskRepository {

    public async findAll(): Promise<Task[]> {
        return taskModel.find().populate('user').populate('category');
    }

    public async findById(id: string): Promise<Task | null> {
        return taskModel.findById(id).populate('user').populate('category');
    }

    public async create(task: CreateTaskDTO): Promise<void> {
        await taskModel.create(task);
    }

    public async update(foundTask: Task, task: CreateTaskDTO): Promise<void> {
        await taskModel.updateOne(foundTask, task);
    }

    public async delete(task: Task): Promise<void> {
        await taskModel.deleteOne(task);
    }

    public async findAllByUser(idUser: string): Promise<Task[]> {
        return taskModel.find({ user: idUser });
    }

}