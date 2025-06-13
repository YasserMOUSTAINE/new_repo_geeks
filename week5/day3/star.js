const button = document.getElementById("get-character");
const loading = document.getElementById("loading");
const characterDiv = document.getElementById("character");
const errorDiv = document.getElementById("error");

button.addEventListener("click", async () => {
  const randomId = Math.floor(Math.random() * 83) + 1;
  const url = `https://www.swapi.tech/api/people/${randomId}`;

  // Reset affichage
  // Efface anciens résultats
    const oldInfo = document.querySelector("#character-info");
    if (oldInfo) oldInfo.remove();

    errorDiv.textContent = "";
    loading.style.display = "block";


  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erreur lors de la récupération des données.");
    
    const data = await response.json();
    const character = data.result.properties;

    const homeworldResponse = await fetch(character.homeworld);
    const homeworldData = await homeworldResponse.json();
    const homeworldName = homeworldData.result.properties.name;

    // Crée un bloc pour les infos
    const infoDiv = document.createElement("div");
    infoDiv.id = "character-info";
    infoDiv.innerHTML = `
      <h2>${character.name}</h2>
      <p><strong>Height:</strong> ${character.height} cm</p>
      <p><strong>Gender:</strong> ${character.gender}</p>
      <p><strong>Birth Year:</strong> ${character.birth_year}</p>
      <p><strong>Home World:</strong> ${homeworldName}</p>
    `;

    characterDiv.appendChild(infoDiv);

  } catch (error) {
    errorDiv.textContent = "❌ Failed to fetch character data.";
  } finally {
    loading.style.display = "none";
  }
});
