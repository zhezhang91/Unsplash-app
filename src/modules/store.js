import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../components/SearchBar/searchSlice';
import paginationReducer from '../components/Footer/paginationSlice';

export default configureStore({
  reducer: {
    search: searchReducer,
    pagination: paginationReducer,
  },
});
