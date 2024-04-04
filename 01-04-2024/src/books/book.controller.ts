import { Request, Response } from 'express'
import bookService from './book.service'

class BookController {

    async create(req: Request, res: Response) {
        const book = await bookService.create(req.body)
        res.status(201)
        return res.json(book)
    }

    async findById(req: Request, res: Response) {
        const book = await bookService.findById(req.params.id)
        return res.json(book)
    }

    async find(req: Request, res: Response) {
        const books = await bookService.findAll()
        return res.json(books)
    }

    async update(req: Request, res: Response) {
        const updatedBook = await bookService.update(req.params.id, req.body)
        return res.json(updatedBook)
    }

    async delete(req: Request, res: Response) {
        const deleteReturn = await bookService.delete(req.params.id)
        return res.json(deleteReturn)
    }

}

export default new BookController()