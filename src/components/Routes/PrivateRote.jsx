import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { LOGIN_ROUTE } from 'constants/routs';
import { selectAuthenticated } from 'redux/auth/auth.selectors';

const PrivateRoute = ({ children, navigateTo = LOGIN_ROUTE }) => {
  const authenticated = useSelector(selectAuthenticated);

  return authenticated ? children : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;
