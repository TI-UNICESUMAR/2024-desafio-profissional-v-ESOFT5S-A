import app from '../src/app'
import { describe, it, expect } from '@jest/globals'
import BookModel from '../src/books/schemas/book.schema'
import * as request from 'supertest'

describe('Testando endpoints de books', () => {
    it.skip('Deve inserir um livro no banco de dados', async () => {
        const BookMock = {
            title: "Androides sonham com ovelhas elétricas?",
            author: "PhiliK. Dick",
            ISBN: "123-A",
            price: 20.99
        }

        const response = await request.default(app).post('/books').send(BookMock)
        const findedBook = await BookModel.findById(response.body._id)

        expect(response.status).toEqual(201)
        expect(response.body._id).toBeDefined()
        expect(BookMock.title).toBe(findedBook?.title)
        expect(BookMock.author).toBe(findedBook?.author)
        expect(BookMock.ISBN).toBe(findedBook?.ISBN)
        expect(BookMock.price).toBe(findedBook?.price)
    })

    it('Deve recuperar todos os livros do banco de dados', async () => {
        const response = await request.default(app).get('/books')
        const totalBooksOnDatabase = await BookModel.countDocuments()

        expect(response.status).toEqual(200)
        expect(response.body.length).toEqual(totalBooksOnDatabase)
    })
})