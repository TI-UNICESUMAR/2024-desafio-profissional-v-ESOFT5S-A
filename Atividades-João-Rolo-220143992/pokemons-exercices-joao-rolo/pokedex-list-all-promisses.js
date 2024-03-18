const fs = require('fs/promises');

function escreverArquivo(nomeArquivo, dados) {
    return fs.writeFile(nomeArquivo, dados);
}

function lerArquivo(nomeArquivo) {
    return fs.readFile(nomeArquivo, 'utf-8');
}

function fetchPokemonData(i) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json());
}

function getPokemonData() {
    var allPromises = [];

    for (var i = 1; i < 151; i++) {
        allPromises.push(fetchPokemonData(i));
    }

    return Promise.all(allPromises)
        .then(pokemons => {
            var allPokemons = [];

            pokemons.forEach(data => {
                var pokemonInfo = {
                    nome: data.name,
                    tipos: data.types.map(type => type.type.name),
                    peso: data.weight,
                    altura: data.height,
                    numeroDex: data.id,
                    image: data.sprites.front_default
                };

                allPokemons.push(pokemonInfo);
            });

            const pokemonData = JSON.stringify(allPokemons, null, 2);
            return escreverArquivo('pokemon.json', pokemonData);
        })
        .then(() => {
            return Promise.all([
                lerArquivo('dados.txt'),
                lerArquivo('pokemon.json')
            ]);
        })
        .then(([dadosArquivoLocal, dadosPokemonSalvo]) => {
            console.log("Conteúdo do arquivo dados.txt:", dadosArquivoLocal);
            console.log("Conteúdo do arquivo pokemon.json:", dadosPokemonSalvo);
        })
        .catch(error => {
            console.error("Erro ao obter ou processar dados do pokemon:", error);
        });
}

getPokemonData();





    
