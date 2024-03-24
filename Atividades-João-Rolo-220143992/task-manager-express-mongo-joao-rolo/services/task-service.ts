import { Task } from "../entity/task"
import taskModel from "../entity/task"



export default class TaskService {
    async create(task: Task) {

        const createdBook = await taskModel.create(task)
        return createdBook
    }

    async findById(id: Task["_id"]) {
        const findedBook = await taskModel.findById(id)
        return findedBook
    }
}

