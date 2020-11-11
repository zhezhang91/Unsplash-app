import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../components/SearchBar/searchSlice';
import paginationReducer from '../components/Footer/paginationSlice';

export const combinedReducer = combineReducers({
  search: searchReducer,
  pagination: paginationReducer,
});

export default configureStore({
  reducer: combinedReducer,
});
