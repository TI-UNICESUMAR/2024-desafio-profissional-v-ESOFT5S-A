import { CategoryRepository } from '../repository/category.repository';
import { Category } from '../types/category';
import { CategoryDTO } from '../dtos/category.dto';

export class CategoryService {

    private readonly repository: CategoryRepository;

    constructor(repository: CategoryRepository) {
        this.repository = repository;
    }

    public async findAll(): Promise<Category[]> {
        return this.repository.findAll()
    }

    public async findById(id: string): Promise<Category | null> {
        return this.repository.findById(id)
    }

    public async create(category: CategoryDTO): Promise<void> {        
        await this.repository.create(category)
    }

    public async update(id: string, category: CategoryDTO): Promise<void> {
        await this.repository.update(id, category)
    }

    public async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }

    public async findAllByUser(idUser: string): Promise<Category[]> {
        return this.repository.findAllByUser(idUser);
    }

}