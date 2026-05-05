function obterPokemons(nomePokemon) {
   const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;

   fetch(urlPokemon)
      .then(resposta => resposta.json())
      .then(data => {
         const pokemonCard = `
            <div class='pokemon-card'>
                <h2>${data.name}</h2>
                <p>Altura: ${data.height}</p>
                <p>Peso: ${data.weight}</p>
                <img src="${data.sprites.front_default}" alt="${data.name}"/>
            </div>
            `;

         document.getElementById("pokemon_info").innerHTML += pokemonCard;
      })
      .catch(erro => {
         console.log("Não foi possível capturar o Pokemon desejado", erro);
      })
      .finally(() => {
         console.log("acabou o processo");
      });
}

window.onload = function () {
   const meusPokemons = [
      "alakazan",
      "psyduck",
      "charizard",
      "dragonite",
      "onix",
      "haunter",
      "gengar",
      "gardevoir",
      "blastoise",
      "igglybuff",
      "gastly",
      "arcanine",
      "eevee",
      "snorlax",
      "lucario",
      "ninetales",
      "togekiss",
   ];
   meusPokemons.forEach(pokemon => {
      obterPokemons(pokemon);
   });
};

//http
//POST - CREATE
//PUT - UPDATE
//GET/FETCH - READ
//DELETE - DELETE


// JavaScript Object Notation
// <img src="${data.sprites.front_default}" alt="${data.name}"/>
