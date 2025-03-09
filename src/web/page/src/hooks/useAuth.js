import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

const useAuth = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logout());
  };

  return { user, signOut };
};

export default useAuth;
