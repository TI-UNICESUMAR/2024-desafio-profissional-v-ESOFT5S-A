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

    async delete(req:Request, res: Response){
        const deletedTask = await new TaskService().delete(req.params.id)
        return res.json(deletedTask);
    }

    async getAllByUser(req:Request, res:Response){
        const findedTasks = await new TaskService().findAllByUserId(req.params.id)
        return res.status(200).json(findedTasks);
    }


}

export default new TaskController()