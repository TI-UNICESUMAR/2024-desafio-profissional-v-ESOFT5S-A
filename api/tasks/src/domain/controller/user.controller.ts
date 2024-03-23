import { Request, Response } from 'express'
import { UserService } from "../service/user.service";
import { StatusCode } from "../enums/status.code";
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { User } from '../types/user';

export class UserController {

    private readonly service: UserService

    constructor(service: UserService) {
        this.service = service;
    }

    public async findAll(request: Request, response: Response): Promise<void> {
        const users: User[] = await this.service.findAll();

        response.status(StatusCode.SUCCESS).send(users);

    }

    public async findById(request: Request, response: Response): Promise<void> {
        const idUser: string = request.params.id;

        const foundUser: User | null = await this.service.findById(idUser);
        response.status(StatusCode.SUCCESS).send(foundUser);

    }   

    public async create(request: Request, response: Response): Promise<void> {
        const user: CreateUserDTO = request.body;

        this.service.create(user)
        response.status(StatusCode.CREATED).send()

    }

    public async update(request: Request, response: Response): Promise<void> {
        const idUser: string = request.params.id
        const user: UpdateUserDTO = request.body

        this.service.update(idUser, user)
        response.status(StatusCode.SUCCESS).send()

    }

    public async delete(request: Request, response: Response): Promise<void> {
        const idUser: string = request.params.id

        this.service.delete(idUser)
        response.status(StatusCode.NO_CONTENT).send()

    }

}