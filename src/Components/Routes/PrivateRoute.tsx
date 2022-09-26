import { Navigate, useLocation } from 'react-router-dom';
import { getLocalData } from 'src/utils';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isLogged = getLocalData('isLogged');
  const location = useLocation();
  if (!isLogged) {
    return <Navigate to='/' state={{ from: location }} replace={true} />;
  }
  return children;
};

export default PrivateRoute;
