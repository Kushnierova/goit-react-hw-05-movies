import { Link, useParams, useLocation } from 'react-router-dom';
import { useRef } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <div>
      <button>
        <Link to={backLinkLocationRef.current}>Go Back</Link>
      </button>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod modi unde
        nam accusamus et consequuntur id qui voluptates fuga, architecto totam
        suscipit beatae officia reprehenderit non temporibus excepturi alias
        delectus.
      </h1>
    </div>
  );
};
export default MovieDetails;
