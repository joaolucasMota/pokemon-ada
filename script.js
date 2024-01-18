const select = document.getElementById('selectId')
const button = document.getElementById('buscarButton')

const card = document.createElement("div");

async function fetchPoke() {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${select.value}`);
  const data = await response.json();

  data.results.forEach(async (element) => {
    const resp = await fetch(element.url);
    const poke = await resp.json();


    const types = poke.types.map((type) => type.type.name);

    card.innerHTML = `
      <h2>${poke.name}</h2>
      <img src="${poke.sprites.front_default}">     
      <p>
      Tipos: ${types.join(", ")}
      </p>
      `;
    card.classList.add("cardList")
    lista.appendChild(card);
  });
}
fetchPoke();
console.log(select.value)


button.addEventListener('click', async () => {

  const resp = await fetch(select.value);
  const typeName = await resp.json();




  typeName.pokemon.forEach(poke => {
    console.log(poke.pokemon.url)
    console.log(poke.pokemon.name)
    card.innerHTML += `
      <h2>${poke.pokemon.name}</h2>
  
    
     
      `;
    card.classList.add("cardList")
    lista.appendChild(card);
  })


});

async function filtro() {

  const response = await fetch("https://pokeapi.co/api/v2/type/");
  const data = await response.json();


  data.results.forEach(async (element) => {
    // const resp = await fetch(element.url);
    // const typeName = await resp.json();


    select.innerHTML += `
    <option value="${element.url}">${element.name}</option>
    `
  });

}

filtro();





// async function filtro() {
//   const select = document.getElementById('selectId');
//   const button = document.getElementById('buscarButton');

//   const response = await fetch("https://pokeapi.co/api/v2/type/");
//   const data = await response.json();

//   select.innerHTML = "";

//   for (const element of data.results) {
//     const resp = await fetch(element.url);
//     const typeName = await resp.json();

//     console.log(typeof(typeName));

//     typeName.forEach((item) => {
//       const option = document.createElement("option");
//       option.text = item;
//       select.add(option);
//     });
//   }
// }

// filtro();