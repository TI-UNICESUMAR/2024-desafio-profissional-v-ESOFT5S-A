import authorModel from '../models/author.schema'

export class AuthorService {
    async create(book: any) {
        const createdBook = await authorModel.create(book)
        return createdBook
    }

    async findById(id: any) {
        const findedBook = await authorModel.findById(id)
        return findedBook
    }

    async deleteById(id: any) {
        const deletedBook = await authorModel.findByIdAndDelete(id)
        return deletedBook
    }

    async updateById(id: any, book: any) {
        const updatedBook = await authorModel.findByIdAndUpdate(id, book, { new: true })
        return updatedBook
    }
}

export default AuthorService;
