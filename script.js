

async function fetchPoke() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
    const data = await response.json();
  
    data.results.forEach(async (element) => {
      const resp = await fetch(element.url);
      const poke = await resp.json();
  
      const card = document.createElement("div");
  
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
