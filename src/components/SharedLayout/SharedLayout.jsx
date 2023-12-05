import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { selectAuthenticated } from 'redux/auth/auth.selectors';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import css from './SharedLayout.module.css';

export const SharedLayout = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <header className={css.header}>
          {authenticated ? (
            <>
              <NavLink className={css.navLink} to="/" end>
                <HomeIcon sx={{ marginRight: 1 }} />
                Home
              </NavLink>

              <NavLink className={css.navLink} to="/contacts">
                <CallIcon sx={{ marginRight: 1 }} />
                Contacts
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className={css.navLink} to="/register">
                <HowToRegIcon sx={{ marginRight: 1 }} />
                Register
              </NavLink>
              <NavLink className={css.navLink} to="/login">
                <LoginIcon sx={{ marginRight: 1 }} />
                Login
              </NavLink>
            </>
          )}
        </header>
        <main>{children}</main>
        <Outlet />
      </Suspense>
    </div>
  );
};
