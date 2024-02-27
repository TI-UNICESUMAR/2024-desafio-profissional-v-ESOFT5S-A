const fs = require('fs/promises');

const escreverArquivo = async (nomeArquivo, dados) => {
    try{
        console.log(`Escrevendo dados no arquivo ${nomeArquivo}...`)
        await fs.writeFile(nomeArquivo, dados)
    } catch(error){
        console.error(`Erro ao escrever dados no arquivo ${nomeArquivo}`, error);
    }
}

const lerArquivo = async (nomeArquivo) => {
    try{
        console.log(`Lendo dados do arquivo: ${nomeArquivo}`)
        const dadosLidos = await fs.readFile('pokemon.json', "utf-8");
        console.log(dadosLidos)
    } catch(error){
        console.error(`Erro ao ler dados do arquivo ${nomeArquivo}`, error);
    }
}

const construindoJson = (data) => {
    const { name, types, weight, height } = data;
    const todosTipos = types.map(({ type }) => type.name);

    const pokemonInfo = {
        nome: name,
        tipos: todosTipos,
        peso: weight,
        altura: height
    };
    return JSON.stringify(pokemonInfo, null, 2)
};

async function getPokemonDataWith() {
    console.log("Aguardando retorno da Poke API")
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((response) => response.json())
        
    const JsonPoke = construindoJson(pokemon)

    await escreverArquivo('pokemon.json', JsonPoke)

    await lerArquivo('pokemon.json')
            
}


getPokemonDataWith();
