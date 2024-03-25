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

    async userLogin(user: Userinterface) {
        try {
            const findedUser = await User.findOne({ username: user.username, password: user.password });
            return findedUser; // Retorna o usuário encontrado ou null se não encontrado
        } catch (error) {
            console.error("Erro durante a consulta ao banco de dados:", error);
            return null; // Retorna null em caso de erro
        }

}
}