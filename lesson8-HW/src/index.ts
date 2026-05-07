import { IFavoriteMovies } from './favorite-Movies.dto';

async function getData(): Promise<IFavoriteMovies[]> {
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    const resp = await fetch('https://api.themoviedb.org/3/account/null/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options);
    const data = await resp.json();
    return data;
}

(async () => {
    const favoriteMovies = await getData();
    console.log(favoriteMovies);
})();
