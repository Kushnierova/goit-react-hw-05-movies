import { Link } from 'react-router-dom';

const MovieSearch = ({movies, location}) => {
  return (
    <ul>
      {movies.map(({ title, id, poster_path }) => {
        return (
          poster_path && (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt="poster"
                  />
                ) : (
                  <img
                    src={
                      'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                    }
                    alt="profile"
                  />
                )}

                <p>{title}</p>
              </Link>
            </li>
          )
        );
      })}
    </ul>
  );
};
export default MovieSearch;
