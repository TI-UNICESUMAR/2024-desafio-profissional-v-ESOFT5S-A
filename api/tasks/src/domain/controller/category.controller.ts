import { Request, Response } from 'express'
import { StatusCode } from "../enums/status.code";
import { CategoryService } from '../service/category.service';
import { CategoryDTO } from '../dtos/category.dto';
import { Category } from '../types/category';

export class CategoryController {

    private readonly service: CategoryService

    constructor(service: CategoryService) {
        this.service = service;
    }

    public async findAll(request: Request, response: Response): Promise<void> {
        const categories: Category[] = await this.service.findAll();

        response.status(StatusCode.SUCCESS).send(categories);

    }

    public async findById(request: Request, response: Response): Promise<void> {
        const idCategory: string = request.params.id;

        const foundCategory: Category | null = await this.service.findById(idCategory);
        response.status(StatusCode.SUCCESS).send(foundCategory);

    }   

    public async create(request: Request, response: Response): Promise<void> {
        const category: CategoryDTO = request.body;

        this.service.create(category)
        response.status(StatusCode.CREATED).send()

    }

    public async update(request: Request, response: Response): Promise<void> {
        const idCategory: string = request.params.id
        const category: CategoryDTO = request.body

        this.service.update(idCategory, category)
        response.status(StatusCode.SUCCESS).send()

    }

    public async delete(request: Request, response: Response): Promise<void> {
        const idCategory: string = request.params.id

        this.service.delete(idCategory)
        response.status(StatusCode.NO_CONTENT).send()

    }

}