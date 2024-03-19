import { Router } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()
routes.post('/books', bookController.create)
routes.get('/books/:id', bookController.findById)
routes.delete('/books/:id', bookController.deleteById)
routes.put('/books/:id', bookController.updateById)


export {
    routes
}