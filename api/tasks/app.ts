import 'express-async-errors';
import express from 'express';
import mongoose from 'mongoose';
import { routes } from './routes';
import dotenv from 'dotenv';

dotenv.config();

class App {
    express: express.Application;
    private readonly DB_HOST = process.env.DB_HOST!;
    private readonly DB_NAME = process.env.DB_NAME!;

    constructor() {
        this.express = express();
        this.middleware();
        this.database();
        this.routes();
    }

    private middleware(): void {
        this.express.use(express.json());
    }

    private async database() {
        try {
            mongoose.set("strictQuery", true);
            await mongoose.connect(this.DB_HOST + this.DB_NAME);
            console.log("connect database success");
        } catch (error) {
            console.error('Cannot connect to database, error:', error);
        }
    }

    private routes(): void {
        this.express.use(routes);
    }
}

export default new App().express;