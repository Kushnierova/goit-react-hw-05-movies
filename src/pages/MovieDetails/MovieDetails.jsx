import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieDetailsById } from 'services/api';
import css from './MovieDetails.module.css';
import { useRef, useState, useEffect, Suspense } from 'react';

const MovieDetails = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await fetchMovieDetailsById(movieId);
        const title = data.title;
        const year = data.release_date.split('-')[0];
        const overview = data.overview;
        const genres = data.genres;
        const poster = data.poster_path;

        setTitle(title);
        setYear(year);
        setOverview(overview);
        setGenres(genres);
        setPoster(poster);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <button className={css.btn}>
        <Link to={backLinkLocationRef.current} >Go Back</Link>
      </button>

      <div className={css.container}>
        {poster ? (
          <img
            src={'' || `https://image.tmdb.org/t/p/w500${poster}`}
            alt="poster"
          />
        ) : (
          <p className={css.text}>poster</p>
        )}
        <div className={css.aboutMovie}>
          <h2 className={css.text}>
            {title}
            {year}
          </h2>

          <h3 className={css.text}>Overview</h3>
          <p className={css.text}>{overview}</p>
          <h3 className={css.text}>Genres</h3>
          <p className={css.text}>
            {genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </p>
          <h3 className={css.text}>Additional information</h3>
          <ul>
            <li className={css.text}>
              <Link to="cast">Cast</Link>
            </li>
            <li className={css.text}>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
      <Suspense fallback={<p className="loading">Loading...</p>}>
          <Outlet />
        </Suspense>
    </div>
  );
};
export default MovieDetails;
