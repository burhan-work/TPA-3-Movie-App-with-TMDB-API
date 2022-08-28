// TMDB

const API_KEY = 'api_key=bbc1194fa53bdd1f61cab297f24c8594';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?api_key=your_api_key&sort_by=popularity.desc' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data) {
    data.forEach(movie => {
        const {title, poster_path, vote_average, release_date} = movie;
        const movie1 = document.createElement('div');
        movie1.classList.add('movie');
        movie1.innerHTML = "
        <img src= IMG_URL + poster_path alt=title>
        
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="rate">${vote_average</span>
        </div>

        <div class="date">
            <p>${release_date}</p>
        </div>
        "
    })
}