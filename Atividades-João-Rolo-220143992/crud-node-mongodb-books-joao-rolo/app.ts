import express from 'express'
import mongoose from 'mongoose'
import { routes } from './routes'

class App {
    express: express.Application

    constructor() {
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }

    private middleware(): void {
        this.express.use(express.json())
    }

    private async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/esoft-a-books')
            console.log("connect database success")
        } catch (error) {
            console.error('Cannot connect to database, error:', error)
        }
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express