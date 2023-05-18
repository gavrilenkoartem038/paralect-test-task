import { MantineProvider } from '@mantine/core';
import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const ThemeProvider = ({ children }: Props) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Inter, sans-serif',
        lineHeight: '1.25',
        components: {
          Button: {
            styles: (theme) => ({
              root: {
                borderRadius: theme.radius.md,
                '&:hover': {
                  backgroundColor: theme.colors.main[5],
                },
                '&:active': {
                  backgroundColor: theme.colors.main[7],
                },
              },
            }),
          },
        },
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
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
