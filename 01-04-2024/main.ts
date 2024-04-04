import app from './app'

export default function main() {
    app.listen(3000, 'localhost', () => {
        console.log('Server running at port 3000')
    })
}

main()