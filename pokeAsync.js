const fs = require('fs/promises');

function escreverArquivo(nomeArquivo, dados) {
    return fs.writeFile(nomeArquivo, dados);
}


function lerArquivo(nomeArquivo) {
   return fs.readFile(nomeArquivo, 'utf-8');
    
}

async function getPokemonData() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
        const data = await response.json();

        const pokemonInfo = {
            nome: data.name,
            tipos: data.types.map(type => type.type.name),
            peso: data.weight,
            altura: data.height
        };

        const pokemonData = JSON.stringify(pokemonInfo, null, 2);
        await escreverArquivo('pokemon.json', pokemonData);

        console.log("Pokemon cadastrado");

        const dadosArquivoLocal = await lerArquivo('dados.txt');
        const dadosPokemonSalvo = await lerArquivo('pokemon.json');

        console.log("Conteúdo do arquivo dados.txt:", dadosArquivoLocal);
        console.log("Conteúdo do arquivo pokemon.json:", dadosPokemonSalvo);
    } catch (error) {
        console.error("Erro ao obter ou processar dados do pokemon:", error);
    }
}

getPokemonData();