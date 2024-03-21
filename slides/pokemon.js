const fs = require('fs/promises');

function writePokemonFile(fileName, data) {
  return fs.writeFile(fileName, data);  
}

function readPokemonFile(fileName) {
  return fs.readFile(fileName, "utf-8");
}

async function getPokemonInfo(i) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
  return response.json();
}

function buildPokemonWithInfo(pokemonData) {
  return {
    nome: pokemonData.name,
    tipos: pokemonData.types.map(type => type.type.name),
    peso: pokemonData.weight,
    altura: pokemonData.height,
    númeroDex: pokemonData.id,
    sprite: pokemonData.sprites.front_default
  }
}

async function getPokemonDataWithPromises() {
  console.time("Chamada: ");
  try {
    const pokemonArray = []
    for (i = 1; i < 152; i++) {
      const pokemonInfoJson = await getPokemonInfo(i);

      pokemonArray.push(buildPokemonWithInfo(pokemonInfoJson))
    
    }
    const pokemonInfoString = JSON.stringify(pokemonArray, null, 2);
    await writePokemonFile("pokemon.json", pokemonInfoString)
    const pokemonData = await readPokemonFile("pokemon.json")

    console.log(pokemonData);
  } catch (error) {
    console.log("Erro: " + error);
  }
  console.timeEnd("Chamada: ");
}

getPokemonDataWithPromises();