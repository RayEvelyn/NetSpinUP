import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../store/slices/authSlice';
import useAuth from '../useAuth';

describe('useAuth Hook', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authReducer
      }
    });
    wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
  });

  test('handles login success', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    await act(async () => {
      await result.current.signIn({
        email: 'test@example.com',
        password: 'password123'
      });
    });

    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.user).toBeTruthy();
  });

  test('handles login failure', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    await act(async () => {
      try {
        await result.current.signIn({
          email: 'invalid@example.com',
          password: 'wrongpassword'
        });
      } catch (error) {
        expect(error).toBeTruthy();
      }
    });

    expect(result.current.error).toBeTruthy();
    expect(result.current.isAuthenticated).toBe(false);
  });
}); 