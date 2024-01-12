import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMoviesSearching } from 'services/api';
import { useState, useEffect } from 'react';
import MovieSearch from 'components/MoviesSearch/MoviesSearch';

function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await fetchMoviesSearching(searchQuery);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [searchParams, searchQuery]);

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value;
    setSearchParams({ query });
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <input type="text" name="query" />
        </label>
        <button type="submit">Search</button>
      </form>
      <MovieSearch movies={movies} location={location} />
    </div>
  );
}

export default Movies;
