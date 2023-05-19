/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
            variants: {
              light: (theme) => ({
                root: {
                  backgroundColor: theme.colors.main[1],
                  color: theme.colors.main[6],
                },
              }),
              subtle: (theme) => ({
                root: {
                  backgroundColor: 'unset',
                  color: theme.colors.gray[5],
                  ...theme.fn.hover({ color: theme.colors.main[4], backgroundColor: 'unset' }),
                  '&:active': {
                    color: theme.colors.main[5],
                  },
                },
              }),
              filled: (theme) => ({
                root: {
                  borderRadius: theme.radius.md,
                  backgroundColor: theme.colors.main[5],
                  '&:hover': {
                    backgroundColor: theme.colors.main[4],
                  },
                  '&:active': {
                    backgroundColor: theme.colors.main[6],
                  },
                },
              }),
            },
          },
          Select: {
            styles: (theme) => ({
              label: {
                marginBottom: '8px',
                fontSize: '1rem',
                fontWeight: 'bold',
              },
              input: {
                borderRadius: theme.radius.md,
                borderColor: theme.colors.gray[3],
                padding: '20px 12px',
                '&::placeholder': {
                  color: theme.colors.gray[5],
                },
                '&:hover': {
                  borderColor: theme.colors.main[5],
                },
              },
              item: {
                '&:hover': {
                  backgroundColor: theme.colors.main[3],
                },
              },
              wrapper: {
                '&:focus-within .mantine-Select-rightSection': {
                  transform: 'rotate(180deg)',
                  svg: {
                    stroke: theme.colors.main,
                  },
                },
              },
            }),
          },
          NumberInput: {
            styles: (theme) => ({
              label: {
                marginBottom: '8px',
                fontSize: '1rem',
                fontWeight: 'bold',
              },
              input: {
                borderRadius: theme.radius.md,
                borderColor: theme.colors.gray[3],
                padding: '20px 12px',
                '&::placeholder': {
                  color: theme.colors.gray[5],
                },
                '&:hover': {
                  borderColor: theme.colors.main[5],
                },
              },
            }),
          },
          Input: {
            styles: (theme) => ({
              label: {
                marginBottom: '8px',
                fontSize: '1rem',
                fontWeight: 'bold',
              },
              input: {
                borderRadius: theme.radius.md,
                borderColor: theme.colors.gray[2],
                '&::placeholder': {
                  color: theme.colors.gray[5],
                },
                '&:hover': {
                  borderColor: theme.colors.main[5],
                },
              },
            }),
          },
        },
        colors: {
          main: [
            '#F7FAFF',
            '#DEECFF',
            '#C9E0FF',
            '#B7D6FF',
            '#92C1FF',
            '#5E96FC',
            '#3B7CD3',
            '#2F4A7D',
            '#253B63',
            '#253B63',
          ],
          gray: [
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
