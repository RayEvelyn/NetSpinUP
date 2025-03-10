import { useSelector, useDispatch } from 'react-redux';
import { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  logout,
  clearError,
  updateUser 
} from '../store/slices/authSlice';
import { api } from '../store/api/apiSlice';
import { refreshAuthToken } from '../utils/refreshToken';

const useAuth = () => {
  const dispatch = useDispatch();
  const { 
    user, 
    isAuthenticated, 
    loading, 
    error,
    token,
    refreshToken,
    sessionExpiry 
  } = useSelector((state) => state.auth);

  const signIn = async (credentials) => {
    try {
      dispatch(loginStart());
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      dispatch(loginSuccess({
        user: data.user,
        token: data.token,
        refreshToken: data.refreshToken,
        sessionExpiry: new Date(Date.now() + 3600000).toISOString() // 1 hour from now
      }));
      return data;
    } catch (err) {
      dispatch(loginFailure(err.message));
      throw err;
    }
  };

  const signOut = async () => {
    try {
      if (token) {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refreshToken }),
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      dispatch(logout());
      dispatch(api.util.resetApiState());
    }
  };

  const updateProfile = async (userData) => {
    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      dispatch(updateUser(updatedUser));
      return updatedUser;
    } catch (err) {
      console.error('Failed to update profile:', err);
      throw err;
    }
  };

  const refreshSession = async () => {
    try {
      return await refreshAuthToken();
    } catch (error) {
      console.error('Session refresh failed:', error);
      throw error;
    }
  };

  const checkAuthStatus = () => {
    if (!sessionExpiry) return false;
    return new Date(sessionExpiry) > new Date();
  };

  const clearAuthError = () => {
    dispatch(clearError());
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    token,
    signIn,
    signOut,
    clearAuthError,
    updateProfile,
    refreshSession,
    checkAuthStatus
  };
};

export default useAuth;
