import { Category } from './../types/category';
import { CategoryDTO } from '../dtos/category.dto';
import categoryModel from '../entity/category.schema'

export class CategoryRepository {

    public async findAll(): Promise<Category[]> {
        return categoryModel.find();
    }

    public async findById(id: string): Promise<Category | null> {
        return categoryModel.findById(id);
    }

    public async create(category: CategoryDTO): Promise<void> {
        await categoryModel.create(category);
    }

    public async update(id: String, category: CategoryDTO): Promise<void> {
        await categoryModel.findByIdAndUpdate(id, category);
    }

    public async delete(id: String): Promise<void> {
        await categoryModel.findByIdAndDelete(id);
    }

}