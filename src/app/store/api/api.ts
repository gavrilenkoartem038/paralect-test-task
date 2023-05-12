import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Catalogue, SearchObject, Vacancies } from './types';

const API_URL = 'https://startup-summer-2023-proxy.onrender.com';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getCatalogue: builder.query<Catalogue[], void>({
      query() {
        return {
          url: '/2.0/catalogues/',
          headers: { 'x-secret-key': 'GEU4nvd3rej*jeh.eqp' },
        };
      },
    }),
    getVacancies: builder.query<Vacancies, SearchObject>({
      query({ searchString, catalogues, paymentFrom, paymentTo }) {
        return {
          url: `/2.0/vacancies/?keyword=${searchString}&catalogues=${catalogues}&payment_from=${paymentFrom}&payment_to=${paymentTo}`,
          headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id':
              'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
          },
        };
      },
    }),
    getFavorites: builder.query<Vacancies, number[]>({
      query(vacanciesList) {
        const list = vacanciesList.join('&ids[]=');
        return {
          url: `/2.0/vacancies/?ids[]=${list}`,
          headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id':
              'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
          },
        };
      },
    }),
  }),
});

export const { useGetCatalogueQuery, useGetVacanciesQuery, useGetFavoritesQuery } = api;
