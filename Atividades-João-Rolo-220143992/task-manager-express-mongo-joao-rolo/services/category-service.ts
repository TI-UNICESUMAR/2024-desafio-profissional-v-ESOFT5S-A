import CategoryInterface, { Category } from "../entity/category";
import categoryModel from "../entity/category";

export default class CategoryService {
    async create(category: CategoryInterface) {
        const createdCategory = await Category.create(category);
        return createdCategory;
    }

    async findById(id: CategoryInterface["_id"]) {
        const findedCategory = await Category.findById(id);
        return findedCategory;
    }

    //async findAllCategoryByUser()
}

export {CategoryService}