import { Request, Response } from 'express'
import bookService from "../services/book.service";


class BookController {
    async create(req: Request, res: Response) {
        const createdBook = await bookService.create(req.body)
        res.status(201)
        return res.json(createdBook)
    }

    async findAll(req: Request, res: Response) {
        const findedBooks = await bookService.findAll()
        return res.json(findedBooks)
    }

    async findById(req: Request, res: Response) {
        const findedBook = await bookService.findById(req.params.id)
        return res.json(findedBook)
    }

    async update(req: Request, res: Response) {
        const updatedBook = await bookService.update(req.params.id, req.body)
        return res.json(updatedBook)
    }

    async delete(req: Request, res: Response) {
        const deleteMessage = await bookService.delete(req.params.id)
        return res.json(deleteMessage)
    }
}

export default new BookController()