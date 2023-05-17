import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormValues } from '../../components/Form/Form';

type SearchType = {
  searchString: string;
  catalogues: string;
  paymentFrom: string;
  paymentTo: string;
  page: number;
};

const initialState: SearchType = {
  searchString: '',
  catalogues: '',
  paymentFrom: '',
  paymentTo: '',
  page: 1,
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
    changePage: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        page: action.payload,
      };
    },
    changeFormParams: (state, action: PayloadAction<FormValues>) => {
      console.log(action.payload);
      return {
        ...state,
        catalogues: action.payload.catalogues,
        paymentFrom: action.payload.paymentFrom,
        paymentTo: action.payload.paymentTo,
      };
    },
  },
});

export const { changeSearchString, changePage, changeFormParams } = commonSlice.actions;

export default commonSlice.reducer;
