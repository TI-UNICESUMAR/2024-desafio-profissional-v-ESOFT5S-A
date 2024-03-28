async function fetchPokemon(number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
  const pokeData = await response.json();
  return pokeData;
}

async function mapPokemon(pokeData) {
  const mappedPokemon = {
    nome: pokeData.name,
    tipos: pokeData.types.map((type) => type.type.name),
    peso: pokeData.weight,
    altura: pokeData.height,
    hex: pokeData.id,
    image: pokeData.sprites.front_default,
  };

  return mappedPokemon;
}

async function writeOnFile(pokemon, file) {
  const fs = require("fs");
  fs.appendFile(file, JSON.stringify(pokemon) + "\n \n \n", (err) => {
    if (err) throw err;
    console.log(`${pokemon.nome.charAt(0).toUpperCase() + pokemon.nome.slice(1)} adicionado ao arquivo!`)
  });
}

async function mainSync() {
  for (let i = 1; i <= 151; i += 1) {
    const pokeData = await fetchPokemon(i);
    const mappedPokemon = await mapPokemon(pokeData);
    writeOnFile(mappedPokemon, "pokeData.txt");
  }
}
// MANEIRA SÍNCRONA

// mainSync();

// MANEIRA ASSÍNCRONA

async function mainAsync() {
  const promises = [];
  for (let i = 1; i <= 151; i += 1) {
    promises.push(fetchPokemon(i));
  }
  const pokeData = await Promise.all(promises);
  const mappedPokemon = await Promise.all(
    pokeData.map(async (pokemon) => await mapPokemon(pokemon))
  );
  mappedPokemon.forEach((pokemon) => writeOnFile(pokemon, "pokeData.txt"));
}

mainAsync();
