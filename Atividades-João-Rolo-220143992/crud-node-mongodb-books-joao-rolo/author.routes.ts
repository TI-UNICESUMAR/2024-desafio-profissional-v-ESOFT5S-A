import { Router } from 'express';
import {AuthorController} from './src/books/author.controller';

const router = Router();
const authorController = new AuthorController();

router.post('/authors', async (req, res) => {
    try {
        await authorController.create(req, res);
    } catch (error) {
        handleError(res, error);
    }
});

router.get('/authors/:id', async (req, res) => {
    try {
        await authorController.findById(req, res);
    } catch (error) {
        handleError(res, error);
    }
});

router.delete('/authors/:id', async (req, res) => {
    try {
        await authorController.deleteById(req, res);
    } catch (error) {
        handleError(res, error);
    }
});

router.put('/authors/:id', async (req, res) => {
    try {
        await authorController.updateById(req, res);
    } catch (error) {
        handleError(res, error);
    }
});

function handleError(res, error) {
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    res.status(status).json({ error: message });
}

export default router;
