import { Category } from "../entity/category"
import categoryModel from "../entity/category"

class CategoryService {
    async create(category: Category) {
        const createdCategory = await categoryModel.create(category)
        return createdCategory
    }

    async findById(id: Category["_id"]) {
        const findedCategory = await categoryModel.findById(id)

    }

}
export default new CategoryService()

