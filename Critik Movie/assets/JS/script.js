fetch("Data/movies.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.results);

    const infosContainer = document.querySelector("#infos");
    for (const movie of data.results) {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <i class="bi bi-plus-circle-fill icons-plus"></i>
    <img class="imgMovie" src="https://image.tmdb.org/t/p/original/${
      movie.poster_path
    }" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <p><i>${movie.release_date}</i></p>
    <div class="rated">
        <p class="rating">${movie.vote_average * 10}%</p>
    </div>
    
        `;

      infosContainer.appendChild(card);
    }
  });
// Sélectionnez l'élément p contenant la note
const ratingElement = document.querySelector(".rating");

// Obtenez la valeur de la note en pourcentage
const ratingValue = movie.vote_average * 10;

// Appliquez la couleur en fonction de la plage de notes
if (ratingValue < 35) {
  ratingElement.style.color = "red";
} else if (ratingValue >= 35 && ratingValue < 60) {
  ratingElement.style.color = "orange";
} else {
  ratingElement.style.color = "green";
}

window.onload = function() {
  // Récupérer l'élément de la popup par son ID
  let popup = document.querySelector("#pop-up");

  // Récupérer les boutons "Accepter" et "Refuser"
  let acceptButton = popup.querySelector(".accept");
  let rejectButton = popup.querySelector(".reject");

  // Afficher la popup
  popup.style.display = "block";

  // Gérer le clic sur le bouton "Accepter"
  acceptButton.addEventListener("click", function() {
      // Cacher la popup lorsque le bouton "Accepter" est cliqué
      popup.style.display = "none";
  });
};

// import results from '../../Data/movies.json' assert { type: 'json' }
// console.log(results)
