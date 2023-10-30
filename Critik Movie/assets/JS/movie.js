const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');
console.log(index)

// for (const movie of data.results) {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     console.log(movie.id);

//     card.innerHTML = `
//       <i class="bi bi-plus-circle-fill icons-plus"></i>
//   <img class="imgMovie"  src="https://image.tmdb.org/t/p/original/${
//     movie.poster_path
//   }" alt="${movie.title}">
//   <h2>${movie.title}</h2>
//   <p><i>${movie.release_date}</i></p>
//   <div class="rated">
//       <p class="rating">${movie.vote_average * 10}%</p>
//   </div>
  
//       ` }