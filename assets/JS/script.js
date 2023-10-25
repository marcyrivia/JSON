
fetch("Data/movies.json")
.then(res => res.json())
.then(data => {
    console.log(data);
    console.log(data.results);


    for (const movie of data.results) {
        
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <img class="imgMovie" src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p><i>${movie.release_date}</i></p>
            <p>${movie.vote_average*10}%</p>
        `;

        infosContainer.appendChild(card);
    }
} )
// import results from '../../Data/movies.json' assert { type: 'json' }
// console.log(results)