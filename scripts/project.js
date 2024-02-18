// URLs for different types (dynamic to handle selection)
const typeUrls = {
  all: 'https://pokeapi.co/api/v2/pokemon/',
  normal: 'https://pokeapi.co/api/v2/type/normal/',
  fire: 'https://pokeapi.co/api/v2/type/fire/',
  ice: 'https://pokeapi.co/api/v2/type/ice/',
  grass: 'https://pokeapi.co/api/v2/type/grass/',
  water: 'https://pokeapi.co/api/v2/type/water/',
  poison: 'https://pokeapi.co/api/v2/type/poison/',
  fairy: 'https://pokeapi.co/api/v2/type/fairy/',
  ghost: 'https://pokeapi.co/api/v2/type/ghost/',
  dragon: 'https://pokeapi.co/api/v2/type/dragon/',
  electric: 'https://pokeapi.co/api/v2/type/electric/',
  steel: 'https://pokeapi.co/api/v2/type/steel/',
  rock: 'https://pokeapi.co/api/v2/type/rock/',
  ground: 'https://pokeapi.co/api/v2/type/ground/',
  dark: 'https://pokeapi.co/api/v2/type/dark/',
  fighting: 'https://pokeapi.co/api/v2/type/fighting/',
  dark: 'https://pokeapi.co/api/v2/type/dark/',
  bug: 'https://pokeapi.co/api/v2/type/bug/',
  psichic: 'https://pokeapi.co/api/v2/type/psichic/',
};

// Reference to the HTML elements
const pokemonContainer = document.getElementById('pokemon-container');
const typeSelector = document.getElementById('type-selector');
let currentType = 'all';

// Update current type based on the selected option
typeSelector.addEventListener('change', (event) => {
  currentType = event.target.value;
  updatePokemonCards();
});

// Function to update displayed Pokemon based on selected type
function updatePokemonCards() {
    pokemonContainer.innerHTML = ''
  const typeUrl = typeUrls[currentType];

  fetch(typeUrl)
    .then(response => response.json())
    .then(data => {
      const pokemonUrls = data.pokemon.map(pokemon => pokemon.pokemon.url);
      fetchPokemon(pokemonUrls);
    })
    .catch(error => console.error(error));
}

// Function to fetch and display individual Pokémon data
function fetchPokemon(urls) {
  urls.forEach(url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        createPokemonCard(data);
      })
      .catch(error => console.error(error));
  });
}



// Function to create a card for a Pokémon
function createPokemonCard(pokemonData) {
  const card = document.createElement('div');
  card.classList.add('pokemon-card');

  const name = document.createElement('h3');
  name.classList.add('pokemon-name');
  name.textContent = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
  card.appendChild(name);

  const image = document.createElement('img');
  image.classList.add('pokemon-image');
  image.src = pokemonData.sprites.front_default;
  image.alt = `Image of ${pokemonData.name}`;
  card.appendChild(image);

  pokemonContainer.appendChild(card);
}

// Initial update to display all Pokemon
updatePokemonCards();
