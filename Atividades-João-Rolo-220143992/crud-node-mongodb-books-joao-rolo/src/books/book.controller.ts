import { Request, Response } from 'express'
import { BookService } from './book.service'
import { AuthorService } from './author.service'



class BookController {
    async create(req: Request, res: Response) {
        const newBook = await new BookService().create(req.body)
        return res.json(newBook)
    }

    async findById(req: Request, res: Response) {
        const book = await new BookService().findById(req.params.id)
        return res.json(book)
    }


    async deleteById(req: Request, res: Response) {
        const deletedBook = await new BookService().deleteById(req.params.id)
        return res.json(deletedBook)
    }

    async updateById(req: Request, res: Response) {
        const updatedBook = await new BookService().updateById(req.params.id, req.body)
        return res.json(updatedBook)
    }

}

export default new BookController()