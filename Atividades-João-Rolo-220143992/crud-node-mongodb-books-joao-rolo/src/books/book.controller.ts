import { Request, Response } from 'express'
import { BookService } from './book.service'



class BookController {


private bookService:BookService

constructor(){
    this.bookService = new BookService
}

    async create(req: Request, res: Response) {
        const newBook = await this.bookService.create(req.body)
        return res.json(newBook)
    }

    async findById(req: Request, res: Response) {
        const book = await this.bookService.findById(req.params.id)
        return res.json(book)
    }


    async deleteById(req: Request, res: Response) {
        const deletedBook = await this.bookService.deleteById(req.params.id)
        return res.json(deletedBook)
    }

    async updateById(req: Request, res: Response) {
        const updatedBook = await this.bookService.updateById(req.params.id, req.body)
        return res.json(updatedBook)
    }

}

export default new BookController()