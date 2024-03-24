import { User } from "../entity/user"
import Userinterface from "../entity/user"


export default class UserService {
    async create(user: Userinterface) {

        const createdBook = await User.create(user)
        return createdBook
    }

    async findById(id: Userinterface["_id"]) {
        const findedBook = await User.findById(id)
        return findedBook
    }
}