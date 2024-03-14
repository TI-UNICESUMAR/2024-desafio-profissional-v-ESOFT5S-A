import { Router } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()
routes.post('/books', bookController.create)
routes.get('/books/:id', bookController.findById)

export {
    routes
}