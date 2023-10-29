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
  const searchBar = document.querySelector("#searchBar");
   
  searchBar.addEventListener("keyup", (e)=> {
    const searchedLetter = e.target.value
    const cards = document.querySelectorAll("card");
    filterElements(searchedLetter, cards)
  
  })
  
  function filterElements(letters, title) {
    if(letters.length > 2){
      for (let i = 0; i < title.length; i++) {
        if(title[i].textContent.toLowerCase().includes(letters.toLowerCase())){
          title[i].style.display = "block";
        } else {
          title[i].style.display = "none";
        }
    } 
  }}

const ratingElement = document.querySelector(".rating");


const ratingValue = movie.vote_average * 10;

if (ratingValue < 35) {
  ratingElement.style.color = "red";
} else if (ratingValue >= 35 && ratingValue < 60) {
  ratingElement.style.color = "orange";
} else {
  ratingElement.style.color = "green";
}

window.onload = function() {

  let popup = document.querySelector("#pop-up");


  let acceptButton = popup.querySelector(".accept");
  let rejectButton = popup.querySelector(".reject");

  popup.style.display = "block";


  acceptButton.addEventListener("click", function() {
      popup.style.display = "none";
  });
};

