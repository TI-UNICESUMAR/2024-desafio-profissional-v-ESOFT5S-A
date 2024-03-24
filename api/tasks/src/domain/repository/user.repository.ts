import { CreateUserDTO } from '../dtos/create-user.dto';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { User } from '../types/user';
import userModel from '../entity/user.schema'

export class UserRepository {

    public async findAll(): Promise<User[]> {
        return userModel.find();
    }

    public async findById(id: string): Promise<User | null> {
        return userModel.findById(id);
    }

    public async create(user: CreateUserDTO): Promise<void> {
        await userModel.create(user);
    }

    public async update(foundUser: User, user: UpdateUserDTO): Promise<void> {
        await userModel.updateOne(foundUser, user);
    }

    public async delete(foundUser: User): Promise<void> {
        await userModel.deleteOne(foundUser);
    }

    public async findByEmail(email: string): Promise<User | null> {
        return userModel.findOne({ email: email });
    } 

}