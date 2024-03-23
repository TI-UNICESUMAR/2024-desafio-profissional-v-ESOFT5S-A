import { UpdateUserDTO } from './../dtos/update-user.dto';
import { CreateUserDTO } from "../dtos/create-user.dto";
import { UserRepository } from "../repository/user.repository";
import { User } from '../types/user';
import { Password } from '../utils/password.utils';

export class UserService {

    private readonly repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    public async findAll(): Promise<User[]> {
        return this.repository.findAll()
    }

    public async findById(id: string): Promise<User | null> {
        return this.repository.findById(id)
    }

    public async create(user: CreateUserDTO): Promise<void> {
        user.password = await Password.generateHash(user.password)
        
        await this.repository.create(user)
    }

    public async update(id: String, user: UpdateUserDTO): Promise<void> {
        await this.repository.update(id, user)
    }

    public async delete(id: String): Promise<void> {
        await this.repository.delete(id)
    }

}