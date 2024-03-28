import { NotFoundError } from './../helpers/errors/not-found.error';
import { CreateTaskDTO } from './../dtos/create-task.dto';
import { Task } from '../types/task';
import { TaskRepository } from './../repository/task.repository';
import { StatusCode } from '../enums/status.code';
import { StatusTask } from '../enums/status.task';
import { TasksByCategory } from '../types/tasksByCategory';
import { UpdateTaskDTO } from '../dtos/update-task.dto';

export class TaskService {

    private readonly repository: TaskRepository;

    constructor(repository: TaskRepository) {
        this.repository = repository;
    }

    public async findAll(): Promise<Task[]> {
        return this.repository.findAll()
    }

    public async find(id: string): Promise<Task> {
        return this.findById(id);
    }

    public async create(task: CreateTaskDTO): Promise<void> {        
        await this.repository.create(task)
    }

    public async update(id: string, task: UpdateTaskDTO): Promise<void> {
        const foundTask: Task = await this.findById(id);
        await this.repository.update(foundTask, task);
    }

    public async delete(id: string): Promise<void> {
        const foundTask: Task = await this.findById(id);
        await this.repository.delete(foundTask)
    }

    public async findAllByUser(idUser: string): Promise<Task[]> {
        return this.repository.findAllByUser(idUser);
    }

    public async findAllByCategory(idCategory: string): Promise<Task[]> {
        const tasks: Task[] = await this.repository.findAll();

        return tasks.filter(task => task.category?._id === idCategory);
    }

    public async findAllByStatus(status: string): Promise<Task[]> {
        const tasks: Task[] = await this.repository.findAll();

        return tasks.filter(task => task.status === status);
    }

    public async findAllByPeriodDateConclusion(initialDate: Date, finalDate: Date): Promise<Task[]> {
        const tasks: Task[] = await this.repository.findAll();

        return tasks.filter(task => this.isDateBetween(task.dateConclusion, initialDate, finalDate));
    }

    public async findFirstByUser(idUser: string): Promise<Task> {
        const tasks: Task[] = await this.repository.findAll();

        return this.filterAllByUser(tasks, idUser)
                .sort((a, b) => this.sortByDate(a.dateCreate, b.dateCreate))[0];
    }

    public async findLastByUser(idUser: string): Promise<Task> {
        const tasks: Task[] = await this.repository.findAll();

        return this.filterAllByUser(tasks, idUser)
                .sort((a, b) => this.sortByDate(b.dateCreate, a.dateCreate))[0];
    }

    public async countByUser(idUser: string) {
        return (await this.findAllByUser(idUser)).length;
    }

    public async findByCompletedAvg(): Promise<string> {
        const tasks: Task[] = await this.repository.findAll();
        const tasksCompleted: Task[] = tasks.filter(task => task.status === StatusTask.COMPLETED);

        if (tasksCompleted.length === 0) {
            return '0';
        }

        const average: Number = (tasksCompleted.length / tasks.length) * 100;
        return average.toFixed(2)

    }

    public async findByDescriptionBigger(): Promise<Task> {
        const tasks: Task[] = await this.repository.findAll();
        const taskFound = tasks.sort((a, b) => b.description.length - a.description.length)[0];

        return taskFound;
    }

    public async findAndGroupByCategory(): Promise<TasksByCategory> {
        const tasks: Task[] = (await this.repository.findAll()).filter(task => task.category);

        const tasksByCategory: TasksByCategory = this.groupingByCategory(tasks);
        return tasksByCategory;
    }

    private async findById(id: string): Promise<Task> {

        const task: Task | null = await this.repository.findById(id);

        if(!task) {
            throw new NotFoundError(`Task ${id} not found`, StatusCode.NOT_FOUND);
        }

        return task;

    }

    private isDateBetween(date: Date, initialDate: Date, finalDate: Date): boolean {
        return date >= initialDate && date <= finalDate;
    }

    private filterAllByUser(tasks: Task[], idUser: string): Task[] {
        return tasks.filter(task => task.user?._id == idUser);
    }

    private sortByDate(initialDate: Date, finalDate: Date): number {
        return initialDate.getTime() - finalDate.getTime();
    }

    private groupingByCategory(tasks: Task[]): any {

        const result: TasksByCategory = {}

        tasks.forEach(task => {
            (result[task.category.name] = result[task.category.name] || []).push(task);
        })

        return result;
    }

}