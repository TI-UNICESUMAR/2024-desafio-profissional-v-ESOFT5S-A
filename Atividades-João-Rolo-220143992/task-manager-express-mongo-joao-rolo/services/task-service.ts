import { Category } from './../entity/category';
import { Task } from "../entity/task"
import taskModel from "../entity/task"
import UserService from "../services/user-service";
import CategoryService from "../services/category-service";

export default class TaskService {
    async create(task: Task) {
        const findedResponsibleUser = await new UserService().findById(task.responsibleUser);
        const findedCategory = await new CategoryService().findById(task.category);
        
        if (!findedCategory) {
            throw new Error('Category not found');
        }

        task.responsibleUser = findedResponsibleUser;
        task.category = findedCategory; 

        const createdTask = await taskModel.create(task);
        return createdTask;
    }

    async findById(id: Task["_id"]) {
        const findedBook = await taskModel.findById(id);
        return findedBook;
    }


}
