import { Request, Response } from 'express'
import UserService from '../services/user-service'

class UserController{

    async create(req: Request, res: Response){
        const createdUser = await new UserService().create(req.body)
        return res.json(createdUser);    } 


    async findByID(req: Request, res:Response){
        const findedUser = await new UserService().findById(req.params.id) //params = @pathvariable
        return res.json(findedUser)
    }


}

export default new UserController()