# Refatoração

## O que foi refatorado

o que eu encontrei no codigo que poderia ser refatorado foi a falta da tipagem estática na book.sevice e também a falta de tratamento de erros para funções assíncronas.


# Tipagem estática
    
A  tipagem no TypeScript diferente do javaScript que é dinamica, onde vc nem precisa declarar o tripo da varável, quando você tipa uma variável facilita a leitura e evita erros em tempo de compilação, já que ao codigo não será compilado por erro de tipagem.
### Referencias: [Dio.Gabriel Esgalha](https://www.dio.mearticlestypescript-a-importancia-da-tipagem-estatica-na-integridade-do-seu-codigo) | [RocketseatBlog](https://blog.rocketseat.com.br/typescript-vantagens-mitos-conceitos/)

## Antes    
```typescript
    async create(book: any) {                                  
        const createdBook = bookModel.create(book)
        return createdBook
    }

     async findById(id: any) {
        const findedBook = await bookModel.findById(id)
        return findedBook
    }
```
## Depois
```typescript
    async create(book: Book) {                                  
        const createdBook = bookModel.create(book)
        return createdBook
    }

    async findById(id: String) {
        const findedBook = await bookModel.findById(id)
        return findedBook
    }
```

# Tratamento de Erros
    
No livro [Node.js-Design-Patterns](https://www.amazon.com.br/Node-js-Design-Patterns-production-grade-applications/dp/1839214112/ref=asc_df_1839214112/?tag=googleshopp00-20&linkCode=df0&hvadid=379726160779&hvpos=&hvnetw=g&hvrand=1903993756098297087&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9102190&hvtargid=pla-932579373733&psc=1&mcid=1059f0c7d7043c04a738d1e7510dae44)
o autor cita que é uma boa pratica sempre verificar e tratar a presença de um erro, pois sem isso irá dificultar a depuração do nosso codigo e a descoberta das possíveis falhas no codigo. 

## Antes

```typescript
 async create(req: Request, res: Response) {   
     const book = await new BookService().creat(req.body)
      return res.json(book)
    }
```

## Depois 

```typescript
 async create(req: Request, res: Response) {
        try {
            const book = await new BookService().create(req.body)
            return res.json(book)
        } catch (error) {
            return res.status(400).json({message: error})
        }
       
    }

```
