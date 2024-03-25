import { Request, Response } from 'express';
import { AuthorService } from '../services/author.service';

export class AuthorController {

    private authorService : AuthorService;

   constructor() {
     this.authorService = new AuthorService();

   }

    async create(req: Request, res: Response) {
        const newAuthor = await this.authorService.create(req.body);
        res.json(newAuthor);
    }

    async findById(req: Request, res: Response) {
        const author = await this.authorService.findById(req.params.id);
        res.json(author);
    }

    async deleteById(req: Request, res: Response) {
        const deletedAuthor = await this.authorService.deleteById(req.params.id);
        res.json(deletedAuthor);
    }

    async updateById(req: Request, res: Response) {
        const updatedAuthor = await this.authorService.updateById(req.params.id, req.body);
        res.json(updatedAuthor);
    }
}


export default new AuthorController()