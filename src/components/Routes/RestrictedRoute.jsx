import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { CONTACTS_ROUTE } from 'constants/routs';
import { selectAuthenticated } from 'redux/auth/auth.selectors';

const RestrictedRoute = ({ children, navigateTo = CONTACTS_ROUTE }) => {
  const authenticated = useSelector(selectAuthenticated);

  return authenticated ? <Navigate to={navigateTo} replace /> : children;
};

export default RestrictedRoute;
