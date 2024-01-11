import MoviesTranding from 'components/MoviesTranding';
import { fetchMoviesTrending } from 'services/api';
import { useEffect, useState } from 'react';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMoviesTrending();
        const movies = data.results;
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <MoviesTranding movies={movies} />
    </div>
  );
}

export default Home;
