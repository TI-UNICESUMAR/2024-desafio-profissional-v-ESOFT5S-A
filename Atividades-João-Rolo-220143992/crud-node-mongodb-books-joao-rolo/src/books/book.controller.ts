import { Request, Response } from 'express'
import { BookService } from './book.service'


class BookController {
    async create(req: Request, res: Response) {
        const book = await new BookService().create(req.body)
        return res.json(book)
    }

    async findById(req: Request, res: Response) {
        const book = await new BookService().findById(req.params.id)
        return res.json(book)
    }

    async deleteById(req: Request, res: Response) {
        const deletedBook = await new BookService().findById(req.params.id)

        new BookService().deleteById(deletedBook);

        return res.json("ok");

    }

    async updateById(req: Request, res: Response) {
        const updatedBook = await new BookService().findById(req.params)

        new BookService().updateById(updatedBook);

        return res.json("ok");

    }

}

export default new BookController()