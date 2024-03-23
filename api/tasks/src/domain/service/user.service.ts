import { UnauthorizedError } from './../helpers/errors/unauthorized.error';
import { NotFoundError } from './../helpers/errors/not-found.error';
import { UpdateUserDTO } from './../dtos/update-user.dto';
import { CreateUserDTO } from "../dtos/create-user.dto";
import { UserRepository } from "../repository/user.repository";
import { User } from '../types/user';
import { Password } from '../utils/password.utils';
import { StatusCode } from '../enums/status.code';
import { LoginUserDTO } from '../dtos/login-user.dto';

export class UserService {

    private readonly repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    public async findAll(): Promise<User[]> {
        return this.repository.findAll()
    }

    public async find(id: string): Promise<User> {
        return this.findById(id);
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

    public async auth(user: LoginUserDTO): Promise<void> {

        const foundUser: User = await this.findByEmail(user.email);

        const isValidPassword = await Password.compare(user.password, foundUser.password);

        if(!isValidPassword) {
            throw new UnauthorizedError('Password invalid', StatusCode.UNAUTHORIZED);
        }

    }

    private async findById(id: string): Promise<User> {

        const user: User | null = await this.repository.findById(id);

        if(!user) {
            throw new NotFoundError(`User ${id} not found`, StatusCode.NOT_FOUND);
        }

        return user;

    }

    private async findByEmail(email: string): Promise<User> {

        const user: User | null = await this.repository.findByEmail(email);

        if(!user) {
            throw new NotFoundError(`User ${email} not found`, StatusCode.NOT_FOUND);
        }

        return user;

    }

}