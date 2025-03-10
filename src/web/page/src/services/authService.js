import config from '../config';

export const signup = async (email, password) => {
  const response = await fetch(`${config.API_BASE_URL}/api/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return response.json();
};

export const login = async (email, password) => {
  const response = await fetch(`${config.API_BASE_URL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return response.json();
};