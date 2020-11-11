import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    pageNumber: 1,
    pageSize: 9,
    total: 0,
  },
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setPageNumber, setPageSize, setTotal } = paginationSlice.actions;

export const selectPageNumber = (state) => state.pagination.pageNumber;

export const selectPageSize = (state) => state.pagination.pageSize;

export const selectTotal = (state) => state.pagination.total;

export default paginationSlice.reducer;
