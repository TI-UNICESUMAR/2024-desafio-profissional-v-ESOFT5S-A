import { Request, Response } from 'express'
import UserService from '../services/user-service'

class UserController {

    async create(req: Request, res: Response) {
        const createdUser = await new UserService().create(req.body)
        return res.json(createdUser);
    }


    async findByID(req: Request, res: Response) {
        const findedUser = await new UserService().findById(req.params.id) //params = @pathvariable
        return res.json(findedUser)
    }

    async userLogin(req: Request, res: Response) {
        const user = await new UserService().userLogin(req.body)
        if (!user) {
            return res.status(401).send("Usuario ou senha incorretos")
        }
        return res.send("Usuario logado com sucesso")
    }

}

export default new UserController()