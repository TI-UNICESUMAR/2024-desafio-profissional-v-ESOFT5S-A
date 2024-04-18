import app from "./app";


export default function main() {
    app.listen(3000, 'localhost', () => {
        console.log('Servidor rodando na porta 3000')
    })

    //simulando um erro aleatorio
    // setTimeout(() => {
    //     process.exit(1)
    // }, Math.random() * 1e4)
}

main()