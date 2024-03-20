import bookModel from './book.schema'
import { Book } from './book.interface'

export class BookService {
    async create(book: Book) {
        const createdBook = bookModel.create(book)
        return createdBook
    }

    async findById(id: String) {
        const findedBook = await bookModel.findById(id)
        return findedBook
    }

    async findAll(){
        const findedAllBook = await bookModel.find()
        return findedAllBook
    }

    async update(id: String, book: Book){
        const updateBook = await bookModel.findByIdAndUpdate(id, book, {new: true}) // new: true para que retorne o livro atualizado 
        return updateBook
    
    }

    async delete(id: String){
        const deleteBook = await bookModel.findByIdAndDelete(id)
        return deleteBook
    }
    
}