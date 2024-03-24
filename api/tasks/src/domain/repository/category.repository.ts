import { Category } from './../types/category';
import { CreateCategoryDTO } from '../dtos/create-category.dto';
import categoryModel from '../entity/category.schema'
import { Types } from 'mongoose';
import { UpdateCategoryDTO } from '../dtos/update-category.dto';
const { ObjectId } = Types;

export class CategoryRepository {

    public async findAll(): Promise<Category[]> {
        return categoryModel.find();
    }

    public async findById(id: string): Promise<Category | null> {
        return categoryModel.findById(id);
    }

    public async create(category: CreateCategoryDTO): Promise<void> {
        await categoryModel.create(category);
    }

    public async update(oldCategory: Category, category: UpdateCategoryDTO): Promise<void> {
        await categoryModel.updateOne(oldCategory, category);
    }

    public async delete(category: Category): Promise<void> {
        await categoryModel.deleteOne(category);
    }

    public async findAllByUser(idUser: string): Promise<Category[]> {

        return categoryModel.aggregate([
            {
                $lookup: {
                    from: 'tasks',
                    localField: '_id',
                    foreignField: 'category',
                    as: 'task'
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'task.user',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            { 
                $match: { 'user._id': new ObjectId(idUser) } 
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    color: 1
                }
            }
        ]);
    }

}