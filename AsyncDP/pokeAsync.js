const fs = require('fs/promises');

async function escreverArquivoAsync (nomeArquivo, dados) {
    console.log(`Escrevendo dados no arquivo ${nomeArquivo}...`)
    await fs.writeFile (nomeArquivo, dados, (error) =>  {
        if(error) {
            console.error(`Erro ao escrever dados no arquivo ${nomeArquivo}:`, error)
        } else {
            console.log(`Dados escritos no arquivo ${nomeArquivo} com sucesso.`);
        }
    })
}

async function lerArquivoAsync(nomeArquivo) {
    console.log(`Lendo dados do arquivo: ${nomeArquivo}`)
    await fs.readFile(nomeArquivo, 'utf-8', (error, data) => {
        if(error) {
            console.error(`Erro ao ler dados do arquivo ${nomeArquivo}`, error)
        } else {
            console.log(`Dados lidos do arquivo ${nomeArquivo}`)
        }
    })
}

async function getPokemonDataWithAsync() {
    console.log("Aguardando retorno da Poke API")
    await fetch("https://pokeapi.co/api/v2/pokemon/1")
        .then((response) => response.json())
        .then((data) => {
            const pokemonInfo = {
                nome: data.name,
                tipos: data.types.map(type => type.type.name),
                peso: data.weight,
                altura: data.height
            }

            const pokemonData = JSON.stringify(pokemonInfo, null, 2)
            escreverArquivoAsync('pokemon.json', pokemonData, (error) => {
                if(error) {
                    console.error('Erro ao escrever dados do pokemon', error)

                } else {
                    console.log("Pokemon cadastrado")
                    lerArquivoAsync('dados.txt', (error, dadosArquivoLocal) => {
                        if(error) {
                            console.error('Erro ao ler arquivo dados.txt', error)
                        } else {
                            console.log(`conteudo do arquivo dados.txt`, dadosArquivoLocal)
                            lerArquivoAsync('pokemon.json', (error, dadosPokemonSalvo) => {
                                if(error) {
                                    console.error('Erro ao ler dados do pokemon', error)
            
                                } else {
                                    console.log("Conteudo do arquivo pokemon", dadosPokemonSalvo)
                                }
                            })
                        }
                    })
                }
            })

        }).catch((error) => {
            console.error("Erro ao obter dados do pokemon", error)
        })
}

getPokemonDataWithAsync();