import { UpdateUserSchema } from './../dtos/update-user.dto';
import { Request, Response } from 'express'
import { UserService } from "../service/user.service";
import { StatusCode } from "../enums/status.code";
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { User } from '../types/user';
import { LoginUserDTO } from '../dtos/login-user.dto';

export class UserController {

    private readonly service: UserService

    constructor(service: UserService) {
        this.service = service;
    }

    public async findAll(request: Request, response: Response): Promise<void> {
        const users: User[] = await this.service.findAll();

        response.status(StatusCode.SUCCESS).json(users);

    }

    public async findById(request: Request, response: Response): Promise<void> {
        const idUser: string = request.params.id;

        const foundUser: User = await this.service.find(idUser);
        response.status(StatusCode.SUCCESS).json(foundUser);

    }   

    public async create(request: Request, response: Response): Promise<void> {
        const user: CreateUserDTO = request.body;

        await this.service.create(user)
        response.status(StatusCode.CREATED).json()

    }

    public async update(request: Request, response: Response): Promise<void> {
        const idUser: string = request.params.id
        const user: UpdateUserDTO = request.body

        await this.service.update(idUser, user)
        response.status(StatusCode.SUCCESS).json()
    }

    public async delete(request: Request, response: Response): Promise<void> {
        const idUser: string = request.params.id

        await this.service.delete(idUser)
        response.status(StatusCode.NO_CONTENT).json()

    }

    public async auth(request: Request, response: Response): Promise<void> {

        const dataUser: LoginUserDTO = request.body;

        await this.service.auth(dataUser)
        response.status(StatusCode.SUCCESS).json()

    }

}