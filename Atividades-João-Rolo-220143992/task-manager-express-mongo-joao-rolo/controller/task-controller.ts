import { Response, Request } from 'express'
import TaskService from '../services/task-service'

class TaskController {
   

    async createTask(req: Request, res: Response) {
        const createdTask = await new TaskService().create(req.body)
        return res.json(createdTask)
    }

    async findById(req:Request, res: Response){
        const findedTask = await new TaskService().findById(req.params.id)
        return res.json(findedTask);
    }

}

export default new TaskController()