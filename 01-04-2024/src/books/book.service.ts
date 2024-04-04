import BookModel from './book.schema'

class BookService {
    async create(book: any) {
        const createdBook = await BookModel.create(book)

        return createdBook
    }

    async findById(id: string) {
        const findedBook = await BookModel.findById(id)
        return findedBook
    }

    async findAll() {
        const findedBooks = await BookModel.find()
        return findedBooks
    }

    async update(id: string, book: any) {
        const updatedBook = await BookModel.findByIdAndUpdate(id, {
            title: book.title,
            author: book.author,
            price: book.price
        }, { new: true })

        return updatedBook
    }

    async delete(id: string) {
        await BookModel.findByIdAndDelete(id)
        return 'Livro Removido com Sucesso'
    }
}

export default new BookService()

