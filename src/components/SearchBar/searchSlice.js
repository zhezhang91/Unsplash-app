import { createSlice } from '@reduxjs/toolkit';
import { fetchImgsAPI } from '../../modules/unsplashAPI';
import { setTotal } from '../Footer/paginationSlice';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    imgName: '',
    searching: false,
    imgs: [],
  },
  reducers: {
    setImgName: (state, action) => {
      state.imgName = action.payload;
    },
    setImgs: (state, action) => {
      state.imgs = action.payload;
    },
    setSearching: (state, action) => {
      state.searching = action.payload;
    },
  },
});

export const { setImgName, setImgs, setSearching } = searchSlice.actions;

export const selectImgs = (state) => state.search.imgs;

export const selectImgName = (state) => state.search.imgName;

export const selectSearching = (state) => state.search.searching;

export const fetchImgs = () => async (dispatch, getState) => {
  const state = getState();
  const { search, pagination } = state;
  const { imgName } = search;
  if (!imgName) return;
  const res = await fetchImgsAPI(imgName, pagination);
  const { results, total_pages, total } = res;
  dispatch(setImgs(res.results));
  dispatch(setTotal(total));
};

export default searchSlice.reducer;
