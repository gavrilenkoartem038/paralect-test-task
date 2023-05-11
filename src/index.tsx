import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from './app/store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Inter, sans-serif',
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
          },
          black: '#232134',
          primaryColor: 'main',
        }}
      >
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
