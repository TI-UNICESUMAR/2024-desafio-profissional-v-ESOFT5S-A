import { NotFoundError } from './../helpers/errors/not-found.error';
import { CategoryRepository } from '../repository/category.repository';
import { Category } from '../types/category';
import { CreateCategoryDTO } from '../dtos/create-category.dto';
import { StatusCode } from '../enums/status.code';
import { UpdateCategoryDTO } from '../dtos/update-category.dto';

export class CategoryService {

    private readonly repository: CategoryRepository;

    constructor(repository: CategoryRepository) {
        this.repository = repository;
    }

    public async findAll(): Promise<Category[]> {
        return this.repository.findAll()
    }

    public async find(id: string): Promise<Category> {
        return this.findById(id);
    }

    public async create(category: CreateCategoryDTO): Promise<void> {        
        await this.repository.create(category)
    }

    public async update(id: string, category: UpdateCategoryDTO): Promise<void> {
        const foundCategory: Category = await this.findById(id);
        await this.repository.update(foundCategory, category)
    }

    public async delete(id: string): Promise<void> {
        const category: Category = await this.findById(id);
        await this.repository.delete(category)
    }

    public async findAllByUser(idUser: string): Promise<Category[]> {
        return this.repository.findAllByUser(idUser);
    }
    
    private async findById(id: string): Promise<Category> {


        const category: Category | null = await this.repository.findById(id);

        if(!category) {
            throw new NotFoundError(`Category ${id} not found`, StatusCode.NOT_FOUND)
        }

        return category;

    }

}