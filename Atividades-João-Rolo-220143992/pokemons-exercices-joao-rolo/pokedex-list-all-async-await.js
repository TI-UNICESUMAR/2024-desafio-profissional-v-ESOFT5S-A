const fs = require('fs/promises');

function escreverArquivo(nomeArquivo, dados) {
    return fs.writeFile(nomeArquivo, dados);
}


function lerArquivo(nomeArquivo) {
   return fs.readFile(nomeArquivo, 'utf-8');
    
}



async function getPokemonData() {
    var allPokemons = [];

    for (var i = 1; i < 151; i++) {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();

        var pokemonInfo = {
            nome: data.name,
            tipos: data.types.map(type => type.type.name),
            peso: data.weight,
            altura: data.height,
            numeroDex: data.id,
            image: data.sprites.front_default
        };


        const pokemonData = JSON.stringify(allPokemons, null, 2);
        await escreverArquivo('pokemon.json', pokemonData);
        allPokemons.push(pokemonInfo);


        //console.log("Pokemon cadastrado");

        const dadosArquivoLocal = await lerArquivo('dados.txt');
        const dadosPokemonSalvo = await lerArquivo('pokemon.json');

        //console.log("Conteúdo do arquivo dados.txt:", dadosArquivoLocal);
        //console.log("Conteúdo do arquivo pokemon.json:", dadosPokemonSalvo);
    } catch (error) {
        console.error("Erro ao obter ou processar dados do pokemon:", error);
    }
}

console.log(allPokemons);
}
getPokemonData();






