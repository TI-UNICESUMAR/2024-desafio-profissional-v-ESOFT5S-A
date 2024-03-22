import userModel from "../entity/user"
import {User} from "../entity/user"


export default class UserService {
    async create(user: User) {
        
        const createdBook = await userModel.create(user)
        return createdBook
    }

    async findById(id: User["_id"]) {
   const findedBook = await userModel.findById(id)
        return findedBook
    }
}
