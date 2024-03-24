import { Response, Request } from 'express'
import CategoryService from '../services/category-service'

class CategoryController {
    async create(request: Request, response: Response) {

        const createdCategory = await CategoryService.create(request.body)
        response.json(createdCategory)
    }



}

export default new CategoryController()