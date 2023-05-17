import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.25',
            colors: {
              main: [
                '#F7FAFF',
                '#F7FAFF',
                '#DEECFF',
                '#C9E0FF',
                '#B7D6FF',
                '#92C1FF',
                '#5E96FC',
                '#3B7CD3',
                '#2F4A7D',
                '#253B63',
              ],
              gray1: [
                '#f8f9fa',
                '#F5F5F6',
                '#EAEBED',
                '#D5D6DC',
                '#ced4da',
                '#ACADB9',
                '#7B7C88',
                '#495057',
                '#343a40',
                '#212529',
              ],
            },
            black: '#232134',
            primaryColor: 'main',
          }}
        >
          <App />
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
