import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect('mongodb://0.0.0.0:27017/atividade-crud');
  return mongoose.connection;
};

export default conectaNaDatabase;