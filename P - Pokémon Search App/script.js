const input = document.getElementById("search-input"); 
const searchBtn = document.getElementById("search-button"); 
const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id"); 
const pokeWeight = document.getElementById("weight"); 
const pokeHeight = document.getElementById("height"); 
const pokeImage = document.getElementById("image-container"); 
const pokeTypes = document.getElementById("types"); 
const pokeHP = document.getElementById("hp-number"); 
const pokeStats = document.querySelectorAll(".stat-number"); 
 
function clear() { 
  pokeTypes.innerHTML = "";
}

const fetchPokemon = async (pokemon) => {
  try {
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`);
    const data = await res.json();
    showPokeInfo(data);
  } catch (err) {
    console.log(err);
    alert("Pokémon not found"); 
  }
}; 

function showPokeInfo(data) { 
 const { height, weight, id, types, stats, name, sprites } = data; 
 pokeName.textContent = `${name.toUpperCase()}`; 
 pokeId.textContent = `#${id}`; 
 pokeImage.innerHTML = `<img id="sprite" src="${sprites["front_default"]}" height="160px"/>`; 
 pokeHeight.textContent = `Height: ${height}`; 
 pokeWeight.textContent = `Weight: ${weight}`; 
 types.forEach((type) => { 
  const p = document.createElement("p"); 
  p.textContent = `${type["type"]["name"]}`; 
  pokeTypes.appendChild(p);
 }); 
 for (let i = 0; i < pokeStats.length; i++)  { 
  pokeStats[i].textContent = stats[i]["base_stat"];
 }
}

function run() { 
  clear();
  fetchPokemon(input.value.toLowerCase()); 
}

searchBtn.addEventListener("click", run);