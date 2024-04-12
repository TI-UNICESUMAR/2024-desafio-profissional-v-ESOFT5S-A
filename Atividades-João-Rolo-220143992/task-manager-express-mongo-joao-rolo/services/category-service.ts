import CategoryInterface, { Category } from "../entity/category";
import Userinterface from "../entity/user"
import taskModel from "../entity/task"
export default class CategoryService {
    async create(category: CategoryInterface) {
        const createdCategory = await Category.create(category);
        return createdCategory;
    }

    async findById(id: CategoryInterface["_id"]) {
        const findedCategory = await Category.findById(id);
        return findedCategory;
    }

    async findAllCategoryByUser(id: Userinterface["_id"]){
        var categoryUserList:any = [];
        const distinctCategories = await taskModel.distinct('category', { responsibleUser: id });
        distinctCategories.forEach(async(index) => {
           // console.log(index)
        const findedCategory = await Category.findById(index);
            //console.log(findedCategory)
        categoryUserList.push(findedCategory)
            console.log(categoryUserList)

        })

    return categoryUserList;

   

    }
}

export {CategoryService}