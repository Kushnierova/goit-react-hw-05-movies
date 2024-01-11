import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchMoviesSearching } from 'services/api';
import { useState, useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const {results} = await fetchMoviesSearching(query);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [searchParams, query]);

  const onSubmit = (e) => {
    e.preventDefault()
    const query = e.target.query.value
    setSearchParams({query})
    e.target.reset()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <input type="text" value={query} />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
      {movies.map(({ title, id, poster_path }) => {
          return (
            poster_path &&
            <li key={id}>
                <Link to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  {poster_path ? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" /> : <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}

                <p>{title}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Movies;
