import { Request, Response } from 'express'
import { AuthorService } from './author.service'


class AuthorController {
    async create(req: Request, res: Response) {
        const newBook = await new AuthorService().create(req.body)
        return res.json(newBook)
    }

    async findById(req: Request, res: Response) {
        const book = await new AuthorService().findById(req.params.id)
        return res.json(book)
    }


    async deleteById(req: Request, res: Response) {
        const deletedBook = await new AuthorService().deleteById(req.params.id)
        return res.json(deletedBook)
    }

    async updateById(req: Request, res: Response) {
        const updatedBook = await new AuthorService().updateById(req.params.id, req.body)
        return res.json(updatedBook)
    }

}

export default new AuthorController()