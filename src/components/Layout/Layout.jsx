import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <header className={css.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
      <main>
        <Suspense fallback={<p className="loading">Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
