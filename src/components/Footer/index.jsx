import React from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPageNumber,
  setPageSize,
  selectPageNumber,
  selectPageSize,
  selectTotal,
} from './paginationSlice';
import { fetchImgs } from '../SearchBar/searchSlice';
import { scrollToTop } from '../utils';

const Footer = () => {
  const currentPageNumber = useSelector(selectPageNumber);
  const currentPageSize = useSelector(selectPageSize);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  if (!total) return null;

  const handelPagination = async (pageNumber, pageSize) => {
    if (pageSize === currentPageSize) {
      dispatch(setPageNumber(pageNumber));
    } else {
      dispatch(setPageNumber(1));
      dispatch(setPageSize(pageSize));
    }
    await dispatch(fetchImgs());
    scrollToTop();
  };

  return (
    <Pagination
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultCurrent={currentPageNumber}
      current={currentPageNumber}
      defaultPageSize={currentPageSize}
      pageSizeOptions={['15', '30', '45', '60']}
      total={total}
      onChange={handelPagination}
      style={{ margin: '3%' }}
    />
  );
};

export default Footer;
