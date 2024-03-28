const main = document.getElementById("main");

const QUANTITY_POKEMON = 151;
const URL_POKEMON_LIST = "https://pokeapi.co/api/v2/pokemon?limit=";

function buildPokemon(dataPokemon) {
  return {
    name: dataPokemon.name,
    types: dataPokemon.types.map((type) => type.type.name).join(" - "),
    weight: dataPokemon.weight,
    height: dataPokemon.height,
    dexNumber: dataPokemon.id,
    Image: dataPokemon.sprites.back_default,
  };
}

async function getResultPokemon() {
  console.time("Await: ");
  const response = await fetch(`${URL_POKEMON_LIST}${QUANTITY_POKEMON}`);
  const { results } = await response.json();

  Promise.all(
    results.map(async (pokemonData) => {
      const response = await fetch(pokemonData.url);
      const pokemonDetails = await response.json();
      createDivPokemon(buildPokemon(pokemonDetails));
    })
  );
  console.timeEnd("Await: ");
}

function createDivPokemon(pokemon) {
  main.innerHTML += `
        <div class="grid text-center vertical-center">
            <span>${pokemon.name}</span>
            <span>${pokemon.types}</span>
            <span>${pokemon.weight}</span>
            <span>${pokemon.height}</span>
            <span>${pokemon.dexNumber}</span>
            <span>
                <img class="image" src="${pokemon.Image}" alt="Imagem ${pokemon.nome}"/>
            </span>
        </div>`;
}

getResultPokemon();
