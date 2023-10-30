const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');
console.log(index)
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E'
    }
  };
  

 
  
  fetch(`https://api.themoviedb.org/3/movie/${index}?language=fr-FR`, options)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.results);

    const infosContainer = document.querySelector("#infos");

      const card = document.createElement("div");
      card.classList.add("card");
      console.log(data.id);

      card.innerHTML = `
      <i class="bi bi-plus-circle-fill icons-plus"></i>
      <img class="imgMovie"  src="https://image.tmdb.org/t/p/original/${
      data.backdrop_path
    }" alt="${data.title}">
    <div class="rated">
    <div class="egg">
        <p class="rating">${data.vote_average * 10}%</p>
        </div>
    </div>
    <h2 class = "title">${data.title}</h2>
    <p><i>${data.release_date}</i></p>
    
        `
        infosContainer.appendChild(card);
  });