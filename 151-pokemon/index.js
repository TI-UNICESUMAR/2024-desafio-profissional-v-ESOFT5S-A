const fs = require("fs/promises");

const QUANTITY_POKEMON = 151;
const QUANTITY_DIVIDERS = 10;
const URL_POKEMON_LIST = "https://pokeapi.co/api/v2/pokemon?limit=";
const NAME_FILE_JSON = "pokemon.json";

function appendFile(nameFile, data) {
  return fs.appendFile(nameFile, data + ",\n");
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

function writeArrayPokemon(pokemons) {
  Promise.all(
    pokemons.map((pokemon) => fetch(pokemon.url).then((resp) => resp.json()))
  ).then((values) => {
    values.forEach((value) => {
      appendFile(NAME_FILE_JSON, JSON.stringify(buildPokemon(value)));
    });
  });
}

async function getPokemonData() {
  try {
    console.time("Await");
    const response = await fetch(URL_POKEMON_LIST + QUANTITY_POKEMON);
    const { results } = await response.json();

    let interactions = Math.ceil(QUANTITY_POKEMON / 10);
    for (i = 0; i < interactions; i++) {
      const size = i * QUANTITY_DIVIDERS;
      const pokemons = results.slice(size, size + QUANTITY_DIVIDERS);

      writeArrayPokemon(pokemons);
    }
  } catch (err) {
    console.log("Ocorreu um erro:", err.message);
  }
  console.timeEnd("Await");
}

getPokemonData();
