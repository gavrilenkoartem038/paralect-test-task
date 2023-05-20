import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Catalogue, LoginData, LoginReturn, SearchObject, Vacancies, VacancyObject } from './types';
import getHeaders from '../../utils/tokenUtils';

const API_URL = 'https://startup-summer-2023-proxy.onrender.com';

const searchUrl = ({ searchString, catalogues, paymentFrom, paymentTo, page }: SearchObject) => {
  let str = `/2.0/vacancies/?page=${String(page - 1)}&count=4&published=1`;
  if (searchString !== '') str += `&keyword=${searchString}`;
  if (catalogues !== '') str += `&catalogues=${catalogues}`;
  if (paymentFrom !== '') str += `&payment_from=${paymentFrom}`;
  if (paymentTo !== '') str += `&payment_to=${paymentTo}`;
  if (paymentFrom !== '' || paymentTo !== '') str += '&no_agreement=1';

  return str;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers: Headers, { endpoint }) => {
      getHeaders(headers, endpoint);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.query<LoginReturn, LoginData>({
      query(loginData) {
        return {
          url: '/2.0/oauth2/password/',
          params: loginData,
        };
      },
      async onQueryStarted(arg, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        window.localStorage.setItem('app_access_token', data.access_token);
        window.localStorage.setItem('exp', data.ttl.toString());
      },
    }),
    getCatalogue: builder.query<Catalogue[], void>({
      query() {
        return {
          url: '/2.0/catalogues/',
        };
      },
    }),
    getVacancies: builder.query<Vacancies, SearchObject>({
      query(searchObj) {
        return {
          url: searchUrl(searchObj),
        };
      },
    }),
    getFavorites: builder.query<Vacancies, number[]>({
      query(vacanciesList) {
        const list = vacanciesList.join('&ids[]=');
        return {
          url: `/2.0/vacancies/?ids[]=${list}`,
        };
      },
    }),
    getVacancy: builder.query<VacancyObject, number>({
      query(id) {
        return {
          url: `/2.0/vacancies/${id}`,
        };
      },
    }),
  }),
});

export const { useGetCatalogueQuery, useGetVacanciesQuery, useGetFavoritesQuery, useGetVacancyQuery, useLoginQuery } =
  api;
