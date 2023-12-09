import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { refreshThunk } from 'redux/auth/auth.reducer';
import { Loader } from './Loader/Loader';

import * as ROUTES from '../constants/routs';
import RestrictedRoute from './Routes/RestrictedRoute';
import PrivateRoute from './Routes/PrivateRote';
import { selectIsRefreshing } from 'redux/auth/auth.selectors';

const Home = lazy(() => import('pages/HomePage'));
const Registrated = lazy(() => import('pages/RegistratedPage'));
const LogIn = lazy(() => import('pages/LogInPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <section className="section">
      <div className="container">
        <Suspense fallback={<Loader />}>
          {!isRefresh && (
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route
                  path={ROUTES.HOME_ROUTE}
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                ></Route>

                <Route
                  path={ROUTES.CONTACTS_ROUTE}
                  element={
                    <PrivateRoute>
                      <Contacts />
                    </PrivateRoute>
                  }
                ></Route>

                <Route
                  path={ROUTES.LOGIN_ROUTE}
                  element={
                    <RestrictedRoute>
                      <LogIn />
                    </RestrictedRoute>
                  }
                ></Route>

                <Route
                  path={ROUTES.REGISTER_ROUTE}
                  element={
                    <RestrictedRoute>
                      <Registrated />
                    </RestrictedRoute>
                  }
                ></Route>
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          )}
        </Suspense>
      </div>
    </section>
  );
};
