const fs = require('fs/promises');

function writePokemonFile(fileName, data) {
  return fs.writeFile(fileName, data);  
}

function readPokemonFile(fileName) {
  return fs.readFile(fileName, "utf-8");
}

async function getPokemonInfo() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  return response.json();
}

function buildPokemonWithInfo(pokemonData) {
  return {
    nome: pokemonData.name,
    tipos: pokemonData.types.map(type => type.type.name),
    peso: pokemonData.weight,
    altura: pokemonData.height
  }
}

async function getPokemonDataWithPromises() {
  try {
    const pokemonInfoJson = await getPokemonInfo();

    const pokemon = buildPokemonWithInfo(pokemonInfoJson);
    const pokemonInfoString = JSON.stringify(pokemon, null, 2);
  
    await writePokemonFile("pokemon.json", pokemonInfoString);
    const pokemonData = await readPokemonFile("pokemon.json")
  
    console.log(pokemonData);
  } catch (error) {
    console.log("Erro: " + error);
  }
}

getPokemonDataWithPromises(); 