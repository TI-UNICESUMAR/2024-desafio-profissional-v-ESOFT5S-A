import { Router } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()
routes.post('/books', bookController.create)
routes.get('/books/:id', bookController.findById)
routes.get('/books', bookController.findAll)
routes.put('/books/:id', bookController.update)
routes.delete('/books/:id', bookController.delete)

export {
    routes
}
