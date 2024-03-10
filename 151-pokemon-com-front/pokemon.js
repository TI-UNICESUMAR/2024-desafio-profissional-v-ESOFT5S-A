const main = document.getElementById("main");

const QUANTITY_POKEMON = 151;
const URL_POKEMON_LIST = "https://pokeapi.co/api/v2/pokemon?limit=";

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

function appendTipos(tipos) {
  return tipos.join(" - ");
}

function createDivPokemon(pokemon) {
  main.innerHTML += `
        <div class="grid text-center vertical-center">
            <span>${pokemon.nome}</span>
            <span>${appendTipos(pokemon.tipos)}</span>
            <span>${pokemon.peso}</span>
            <span>${pokemon.altura}</span>
            <span>${pokemon.numeroDex}</span>
            <span>
                <img class="image" src="${pokemon.imagem}" alt="Imagem ${pokemon.nome}"/>
            </span>
        </div>`;
}

getResultPokemon();
