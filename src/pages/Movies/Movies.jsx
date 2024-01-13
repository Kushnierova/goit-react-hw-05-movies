import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMoviesSearching } from 'services/api';
import { useState, useEffect } from 'react';
import MovieSearch from 'components/MoviesSearch/MoviesSearch';
import css from './Movies.module.css';

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
  };
  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={css.form}>
        <label>
          <input
            type="text"
            value={searchQuery}
            onChange={e => updateQueryString(e.target.value)}
            name="query"
            className={css.input}
            placeholder="Search for a movie"
          />
        </label>
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      <MovieSearch movies={movies} location={location} />
    </div>
  );
}

export default Movies;
