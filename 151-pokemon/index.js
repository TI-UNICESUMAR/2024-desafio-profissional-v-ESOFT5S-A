const fs = require("fs/promises");

const QUANTITY_POKEMON = 151;
const URL_POKEMON_LIST = "https://pokeapi.co/api/v2/pokemon?limit=";
const NAME_FILE_JSON = "pokemon.json";

function writeFile(nameFile, data) {
  return fs.writeFile(nameFile, data);
}

function buildPokemon(dataPokemon) {
  return {
    nome: dataPokemon.name,
    tipos: dataPokemon.types.map((type) => type.type.name),
    peso: dataPokemon.weight,
    altura: dataPokemon.height,
    numeroDex: dataPokemon.id,
    imagem: dataPokemon.sprites.back_default,
  };
}

async function writeArrayPokemon(results) {
  const pokemons = results.map(async (pokemonData) => {
      const response = await fetch(pokemonData.url);
      const pokemonDetails = await response.json();
      return buildPokemon(pokemonDetails);
    });

  return Promise.all(pokemons);
}

async function getPokemonData() {
  console.time("Await");

  try {
    const response = await fetch(`${URL_POKEMON_LIST}${QUANTITY_POKEMON}`);
    const { results } = await response.json();

    const arrayPokemon = await writeArrayPokemon(results);
    writeFile(NAME_FILE_JSON, JSON.stringify(arrayPokemon));
  } catch (err) {
    console.log("Ocorreu um erro:", err.message);
  }
  
  console.timeEnd("Await");
}

getPokemonData();
