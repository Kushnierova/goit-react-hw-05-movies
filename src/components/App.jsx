import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const MovieCredits = lazy(() => import('./MovieCredits'));
const MovieReviews = lazy(() => import('./MovieReviews'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCredits />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
