const fs = require("fs/promises");

const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/1";
const NAME_FILE_JSON = "pokemon.json";

function writeFile(nameFile, data) {
  return fs.writeFile(nameFile, data);
}

function readFile(nameFile) {
  return fs.readFile(nameFile, "utf-8");
}

function buildPokemon(dataPokemon) {
  return {
    nome: dataPokemon.name,
    tipos: dataPokemon.types.map((type) => type.type.name),
    peso: dataPokemon.weight,
    altura: dataPokemon.height,
  };
}

async function getPokemon() {
  const response = await fetch(URL_POKEMON);
  return response.json();
}

async function getPokemonData() {
  try {
    const pokemonJson = await getPokemon();

    const pokemon = buildPokemon(pokemonJson);
    const pokemonString = JSON.stringify(pokemon, null, 2);

    await writeFile(NAME_FILE_JSON, pokemonString);
    const dataPokemon = await readFile(NAME_FILE_JSON);

    console.log("Pokemon: " + dataPokemon);
  } catch (err) {
    console.log("Ocorreu um erro:", err.message);
  }
}

getPokemonData();
