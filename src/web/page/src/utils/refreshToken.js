import { store } from '../store';
import { updateTokens, logout } from '../store/slices/authSlice';

export const refreshAuthToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error('Token refresh failed');
    }

    const data = await response.json();
    store.dispatch(updateTokens(data));
    return data.token;
  } catch (error) {
    store.dispatch(logout());
    throw error;
  }
}; 