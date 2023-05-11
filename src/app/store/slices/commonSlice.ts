import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Common = {
  searchString: string;
  catalogues: string;
  paymentFrom: string;
  paymentTo: string;
  favorites: number[];
};

const getStorage = () => {
  const arr = localStorage.getItem('favorites');
  if (arr) {
    return JSON.parse(arr) as number[];
  } else {
    return [];
  }
};

const initialState: Common = {
  searchString: '',
  catalogues: '',
  paymentFrom: '',
  paymentTo: '',
  favorites: getStorage(),
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    changeSearchString: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        searchString: action.payload,
      };
    },
    toggleFavorites: (state, action: PayloadAction<number>) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      } else {
        const newFavorites = state.favorites.filter((el) => el !== action.payload);
        state.favorites = newFavorites;
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const { changeSearchString, toggleFavorites } = commonSlice.actions;

export default commonSlice.reducer;
