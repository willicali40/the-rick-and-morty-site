const BASE_URL = "https://rickandmortyapi.com/api/character";

const fetchData = async () => {
  try {
    const response = await fetch(BASE_URL);
    console.log(response);

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);

      let card = "";

      data.results.forEach((character) => {
        card += `
        <article class="container__main-card">
            <img src="${character.image}" alt="character">
            <div class="card__info">
                <h2>${character.name}</h2>
                <p>${character.status} - ${character.species}</p>
                <h3>Location</h3>
                <p>${character.location.name}</p>
                <h3>Origin</h3>
                <p>${character.origin.name}</p>
            </div>
        </article>
        `;

        document.getElementById('cards-container').innerHTML = card
      });
    } else {
      console.error("something happened");
    }
  } catch (error) {
    console.log(error);
  }
};

fetchData();
