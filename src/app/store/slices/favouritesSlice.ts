import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Favorites = {
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

const initialState: Favorites = {
  favorites: getStorage(),
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
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

export const { toggleFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
