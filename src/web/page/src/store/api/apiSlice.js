import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:8080'
  }),
  endpoints: (builder) => ({
    // We'll add endpoints later
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
} = api; 