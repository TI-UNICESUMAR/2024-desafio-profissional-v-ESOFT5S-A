import { Response, Request } from 'express'
import CategoryService from '../services/category-service'

class CategoryController {
    async create(request: Request, response: Response) {

        const createdCategory = await new CategoryService().create(request.body)
        response.json(createdCategory)
    }

    async getAllCategoryByUser(request: Request, response:Response){
        const categorys = await new CategoryService().findAllCategoryByUser(request.params.id);
        console.log("categorias controller: " + categorys + "teste")
        return response.json(categorys);

    }

    



}

export default new CategoryController()