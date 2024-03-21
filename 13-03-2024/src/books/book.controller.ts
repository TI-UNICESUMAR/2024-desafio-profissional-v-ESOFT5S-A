import { Request, Response } from 'express'
import { BookService } from './book.service'


class BookController {
    async create(req: Request, res: Response) {
        try {
            const book = await new BookService().create(req.body)
            return res.json(book)
        } catch (error) {
            return res.status(400).json({message: error})
        }
       
    }

    async findById(req: Request, res: Response) {
        try{
            const book = await new BookService().findById(req.params.id)
            return res.json(book)
        }catch(error){
            return res.status(400).json({message: error})
        }
        
    }

    async findAll(req: Request, res: Response){
        try {
            const book = await new BookService().findAll()
            return res.json(book)
        } catch (error) {
            return res.status(400).json({message: error})
        }
        
    }
    
    async update(req: Request, res: Response){
        try {
            const book = await new BookService().update(req.params.id,req.body)
            return res.json(book) 
        } catch (error) {
            return res.status(400).json({message: error})
        }
           
    }

    async delete(req: Request, res: Response){
        try {
            const book = await new BookService().delete(req.params.id)
            res.status(200).json({message: 'excluido'})
        } catch (error) {
            return res.status(400).json({message: error})
        }
        
    }
}

export default new BookController()