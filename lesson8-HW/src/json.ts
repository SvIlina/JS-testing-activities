interface IFavoriteMovies {
    original_title: string;
    adult: boolean;
    release_date: string;
    vote_average: number;
    vote_count: number;
    overview: string;
}

const data = fetch('https://api.themoviedb.org/3/account/{account_id}/favorite/movies');

