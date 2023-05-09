import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Favourites = {
  name: string;
};

const initialState: Favourites = {
  name: '',
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return { ...state, name: action.payload };
    },
  },
});

export const { setState } = commonSlice.actions;

export default commonSlice.reducer;
