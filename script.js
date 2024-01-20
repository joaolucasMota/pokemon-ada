const select = document.getElementById('selectId')
const button = document.getElementById('buscarButton')
const lista = document.getElementById("lista");

const card = document.createElement("div");



button.addEventListener('click', async () => {
  const resp = await fetch(select.value);
  const typeName = await resp.json();
  card.innerHTML = '';

  typeName.pokemon.forEach(async (poke) => {
    const resPoke = await fetch(poke.pokemon.url);
    const pokemons = await resPoke.json();

    card.innerHTML += `
      <h2>${pokemons.name}</h2>
      <img src="${pokemons.sprites.front_default}" />
      `;
    card.classList.add("cardList")
    lista.appendChild(card);
  })
});

async function filtro() {

  const response = await fetch("https://pokeapi.co/api/v2/type/");
  const data = await response.json();

  data.results.forEach(async (element) => {
    select.innerHTML += `
    <option value="${element.url}">${element.name}</option>
    `
  });
}
filtro();