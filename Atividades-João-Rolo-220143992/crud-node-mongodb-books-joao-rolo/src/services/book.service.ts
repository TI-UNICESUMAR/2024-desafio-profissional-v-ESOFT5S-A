import AuthorService from './author.service';
import bookModel from '../models/book.schema'


export class BookService {

    
    private authorService : AuthorService;

   constructor() {
     this.authorService = new AuthorService();

   }
    
    async create(book: any) {
        
        const newBook = (book)
        console.log(newBook)
        const findedAuthor = await this.authorService.findById(newBook.author)
        console.log(findedAuthor)
        const createdFullBook = bookModel.create({ ...newBook, author: findedAuthor });

        
        return createdFullBook
    }

    async findById(id: any) {
        const findedBook = await bookModel.findById(id)
        return findedBook
    }

    async deleteById(id: any) {
        const deletedBook = await bookModel.findByIdAndDelete(id)
        return deletedBook
    }

    async updateById(id: any, book: any) {
        const updatedBook = await bookModel.findByIdAndUpdate(id, book, { new: true })
        return updatedBook
    }
}