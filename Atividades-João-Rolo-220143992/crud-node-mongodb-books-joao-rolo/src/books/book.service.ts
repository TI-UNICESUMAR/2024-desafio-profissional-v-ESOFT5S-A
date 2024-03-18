import bookModel from './book.schema'

export class BookService {
    async create(book: any) {
        const createdBook = bookModel.create(book)
        return createdBook
    }

    async findById(id: any) {
        const findedBook = await bookModel.findById(id)
        return findedBook
    }

    async deleteById(id: any) {
        const findedBook = await bookModel.deleteOne(id)
        return findedBook
    }



    async updateById(id: any) {
        const findedBook = await bookModel.findByIdAndUpdate(id)
        return findedBook
    }
}