import { Category } from './../types/category';
import { CategoryDTO } from '../dtos/category.dto';
import categoryModel from '../entity/category.schema'
import { Types } from 'mongoose';
const { ObjectId } = Types;

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

    public async update(id: string, category: CategoryDTO): Promise<void> {
        await categoryModel.findByIdAndUpdate(id, category);
    }

    public async delete(id: string): Promise<void> {
        await categoryModel.findByIdAndDelete(id);
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