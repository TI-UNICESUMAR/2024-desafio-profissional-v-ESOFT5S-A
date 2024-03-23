import app from './app';
import dotenv from 'dotenv';

dotenv.config();


const PORT: number = parseInt(process.env.API_PORT!, 10);
const API_URL: string = process.env.API_URL!;

function main() {
    app.listen(PORT, API_URL, () => {
        console.log(`Server running at port ${PORT}`);
    });
}

main();
