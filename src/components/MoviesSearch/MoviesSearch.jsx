import { Link } from 'react-router-dom';
import css from './MoviesSearch.module.css'

const MovieSearch = ({movies, location}) => {
  return (
    <ul className={css.items}>
      {movies.map(({ title, id, poster_path }) => {
        return (
          poster_path && (
            <li key={id} className={css.item}>
              <Link to={`${id}`} state={{ from: location }}>
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt="poster"
                    className={css.img}
                  />
                ) : (
                  <img
                    src={
                      'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                    }
                    alt="profile"
                    className={css.img}
                  />
                )}

                <p className={css.movieTitle}>{title}</p>
              </Link>
            </li>
          )
        );
      })}
    </ul>
  );
};
export default MovieSearch;
