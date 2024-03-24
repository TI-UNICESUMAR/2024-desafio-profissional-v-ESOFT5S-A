import { Request, Response } from 'express'
import { StatusCode } from "../enums/status.code";
import { CategoryService } from '../service/category.service';
import { CreateCategoryDTO } from '../dtos/create-category.dto';
import { UpdateCategoryDTO } from '../dtos/update-category.dto';
import { Category } from '../types/category';

export class CategoryController {

    private readonly service: CategoryService

    constructor(service: CategoryService) {
        this.service = service;
    }

    public async findAll(request: Request, response: Response): Promise<void> {
        const categories: Category[] = await this.service.findAll();

        response.status(StatusCode.SUCCESS).json(categories);

    }

    public async findById(request: Request, response: Response): Promise<void> {
        const idCategory: string = request.params.id;

        const foundCategory: Category = await this.service.find(idCategory);
        response.status(StatusCode.SUCCESS).json(foundCategory);

    }   

    public async create(request: Request, response: Response): Promise<void> {
        const category: CreateCategoryDTO = request.body;

        await this.service.create(category)
        response.status(StatusCode.CREATED).json()

    }

    public async update(request: Request, response: Response): Promise<void> {
        const idCategory: string = request.params.id
        const category: UpdateCategoryDTO = request.body

        await this.service.update(idCategory, category)
        response.status(StatusCode.SUCCESS).json()

    }

    public async delete(request: Request, response: Response): Promise<void> {
        const idCategory: string = request.params.id

        await this.service.delete(idCategory)
        response.status(StatusCode.NO_CONTENT).json()

    }

    public async findAllByUser(request: Request, response: Response): Promise<void> {
        const idUser: string = request.params.id;

        const categories: Category[] = await this.service.findAllByUser(idUser)
        response.status(StatusCode.SUCCESS).json(categories)
    }

}