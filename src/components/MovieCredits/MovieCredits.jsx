import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCreditsById } from '../../services/api';
import css from './MovieCredits.module.css';

const MovieCredits = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCreditsById(movieId);

        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <ul className={css.items}>
      {cast.length === 0 ? (
        <p>No cast available</p>
      ) : (
        cast.map(({ name, character, profile_path, id }) => {
          return (
            <li key={id} className={css.item}>
              {profile_path ? (
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="profile"
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
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default MovieCredits;
