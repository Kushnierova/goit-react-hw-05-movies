import { Link } from 'react-router-dom';
import css from './MoviesTranding.module.css';

function MoviesTranding({ movies }) {
  return (
    <div>
      <p className={css.title}>Tranding today</p>
      <ul className={css.items}>
        {movies.map(({ title, id, poster_path }) => {
          return (
            poster_path && (
              <li key={id} className={css.item}>
                <Link to={`/movies/${id}`}>
                  {poster_path ? (
                    <img
                      className={css.img}
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt="poster"
                    />
                  ) : (
                    <img
                      className={css.img}
                      src={
                        'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                      }
                      alt="profile"
                    />
                  )}

                  <p className={css.movieTitle}>{title}</p>
                </Link>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}

export default MoviesTranding;
