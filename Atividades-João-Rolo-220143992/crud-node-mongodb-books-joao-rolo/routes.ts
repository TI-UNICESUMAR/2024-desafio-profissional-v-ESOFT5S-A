import { Router } from 'express'
import bookController from './src/books/book.controller'
import authorController from './src/books/author.controller'

const routes = Router()
routes.post('/books', bookController.create.bind(bookController))
routes.get('/books/:id', bookController.findById.bind(bookController))
routes.delete('/books/:id', bookController.deleteById.bind(bookController))
routes.put('/books/:id', bookController.updateById.bind(bookController))
routes.post('/author', authorController.create.bind(authorController))


export {
    routes
}