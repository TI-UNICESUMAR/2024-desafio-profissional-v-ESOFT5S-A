import mongoose,{ Schema, model, Document } from "mongoose";

export default interface CategoryInterface extends Document {
    name: String;
    color: String;
}

const categorySchema = new Schema<CategoryInterface>({
    name: String,
    color: String
}, {
    versionKey: false
});


const Category = mongoose.models.user || model<CategoryInterface>('Category', categorySchema);

export { Category };

