import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SearchType = {
  searchString: string;
  catalogues: string;
  paymentFrom: string;
  paymentTo: string;
};

const initialState: SearchType = {
  searchString: '',
  catalogues: '',
  paymentFrom: '',
  paymentTo: '',
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
  },
});

export const { changeSearchString } = commonSlice.actions;

export default commonSlice.reducer;
