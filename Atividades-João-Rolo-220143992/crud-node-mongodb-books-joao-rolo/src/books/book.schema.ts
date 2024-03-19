import { Schema, model } from 'mongoose';
import authorSchema from './author.schema'; // Importe o esquema do autor

const bookSchema = new Schema({
    title: String,
    author: { type: Schema.Types.ObjectId, ref: 'Author' }, // Referência ao modelo do autor
    ISBN: String,
    pageNumber: Number
}, {
    timestamps: true
});

export default model('Book', bookSchema);
