import { Router } from 'express'
import bookController from './src/books/book.controller'
import authorController from './src/books/author.controller'

const routes = Router()
routes.post('/books', bookController.create)
routes.get('/books/:id', bookController.findById)
routes.delete('/books/:id', bookController.deleteById)
routes.put('/books/:id', bookController.updateById)
routes.post('/author', authorController.create)


export {
    routes
}