import { useAuth } from '../contexts/AuthContext';
import { Route, Redirect } from 'react-router';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to='/login' />
  );
};
