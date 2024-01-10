import TrandingMovies from 'components/MoviesTranding';
import { useEffect, useState } from 'react';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = { method: 'GET' };

    fetch('https://example.com/3/movie/popular', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  });
  return (
    <div>
      <TrandingMovies />
    </div>
  );
}

export default Home;
