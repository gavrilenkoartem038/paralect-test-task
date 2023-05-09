import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Catalogue } from './types';

const API_URL = 'https://startup-summer-2023-proxy.onrender.com';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getCatalogue: builder.query<Catalogue, string>({
      query() {
        return {
          url: '/2.0/catalogues/',
          headers: { 'x-secret-key': 'GEU4nvd3rej*jeh.eqp' },
        };
      },
      // query: () => '/2.0/catalogues/',
    }),
  }),
});

export const { useGetCatalogueQuery } = api;
