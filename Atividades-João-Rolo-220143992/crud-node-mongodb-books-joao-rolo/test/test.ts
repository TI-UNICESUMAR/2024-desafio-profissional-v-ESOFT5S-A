import { describe } from "@jest/globals";
import app from "../src/config/app";
import * as request from 'supertest';
import BookModel from "../src/models/book.schema";


describe('Testando endpoints de usuários', () => {
    it('Deve inserir um livro no banco de dados', async () => {
        const bookMock = {
            title: "Androids sonham com ovelhas elétricas?",
            author: "Philik. Dick",
            ISBN: "123-A",
            price: 20.99
        }

        const response = await request.default(app).post('/books').send(bookMock)
        const findedBook = await BookModel.findById(response.body._id)

        expect(response.status).toEqual(201)
        expect(response.body._id).toBeDefined()
        expect(bookMock.title).toBe(findedBook?.title)
        expect(bookMock.author).toBe(findedBook?.author)
        expect(bookMock.ISBN).toBe(findedBook?.ISBN)
        expect(bookMock.price).toBe(findedBook?.price)

    })

    it('Deve recuperar todos os livros do bando de dados', async () => {
        const response = await request.default(app).post('/books')
        const totalBooksOnDatabase = await BookModel.countDocuments()

        expect(response.status).toEqual(200)
        expect(response.body.length).toEqual(totalBooksOnDatabase)
    })
})      