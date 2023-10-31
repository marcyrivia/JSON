 function recuperation(movie){
  window.location.href = `movie.html?index=${movie.id}`
 }

 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
  }
};
fetch(`https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1`, options)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let index = 0
    for (const movie of data.results) {
      const infosRelease = document.querySelector('#release');

      // Créer un lien avec l'ID du film dans l'URL
      const link = document.createElement('div');

      // Liste des images des films dernièrement sortis
      const releaseHTML = `
    <a href="movie.html?id=${movie.id}"><img class="img-fluid" id="imageLatest" src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="affiche film"></a>
    
    `
      // Assigner la structure HTML au lien
      link.innerHTML = releaseHTML;

      // Ajouter le lien au conteneur
      infosRelease.appendChild(link);
      index++
    }

  })
fetch('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', options)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let index = 0
    for (const movie of data.results) {
      const infosPopular = document.querySelector('#popular');
      // Créer un lien avec l'ID du film dans l'URL
      const link = document.createElement('div');
      // Liste des images de films plus populaires
      const popularHTML = `
    <a href="movie.html?id=${movie.id}"><img class="img-fluid" id="imageLatest" src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="affiche film"></a>
    
    `

      // Assigner la structure HTML au lien
      link.innerHTML = popularHTML;

      // Ajouter le lien au conteneur
      infosPopular.appendChild(link);
      index++
    }

  })




let bouton = document.querySelector("#btn-search")
bouton.addEventListener("click", function (){
  const infos = document.querySelector("#infos")
  infos.innerHTML = ''
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
    }
  };

  let movieSearch = document.querySelector("#searchBar").value
  console.log(movieSearch)
  
  fetch(`https://api.themoviedb.org/3/search/movie?query=${movieSearch}&include_adult=false&language=fr-FR&page=1`, options)

  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.results);
    
    const infosContainer = document.querySelector("#infos");
    for (const movie of data.results) {
      const card = document.createElement("div");
      card.classList.add("card");
      console.log(movie.id);
      let affichage = document.querySelector("#popular")
      affichage.innerHTML = ""
      let affich = document.querySelector("#release")
      affich.innerHTML = ""
      
      card.innerHTML = `
      <i class="bi bi-plus-circle-fill icons-plus"></i>
    <img class="imgMovie"  src="https://image.tmdb.org/t/p/original/${
      movie.poster_path
    }" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <p><i>${movie.release_date}</i></p>
    <div class="rated">
        <p class="rating">${movie.vote_average * 10}%</p>
        </div>
        
        `;
        
        infosContainer.appendChild(card);
        card.addEventListener("click", function () {
          recuperation(movie)
          // window.location.href = `movie.html?index=${movie.id}
      }
      )
    }
    
  });
})
  const searchBar = document.querySelector("#searchBar");
  
  searchBar.addEventListener("keyup", (e)=> {
    const searchedLetter = e.target.value
    const cards = document.querySelectorAll("card");
    filterElements(searchedLetter, cards)
  
  })
  
  function filterElements(letters, title) {
    if(letters.length > 2){
      for (let i = 0; i < letters.length; i++) {
        if(title[i].textContent.toLowerCase().includes(letters.toLowerCase())){
          title[i].style.display = "block";
        } else {
          title[i].style.display = "none";
        }
    } 
  }}

// const ratingElement = document.querySelector(".rating");


// const ratingValue = movie.vote_average * 10;

// if (ratingValue < 35) {
//   ratingElement.style.color = "red";
// } else if (ratingValue >= 35 && ratingValue < 60) {
//   ratingElement.style.color = "orange";
// } else {
//   ratingElement.style.color = "green";
// }

// window.onload = function() {

//   let popup = document.querySelector("#pop-up");


//   let acceptButton = popup.querySelector(".accept");
//   let rejectButton = popup.querySelector(".reject");

//   popup.style.display = "block";


//   acceptButton.addEventListener("click", function() {
//       popup.style.display = "none";
//   });
// };

