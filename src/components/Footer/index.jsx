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

const Footer = () => {
  const pageNumber = useSelector(selectPageNumber);
  const pageSize = useSelector(selectPageSize);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  if (!total) return null;
  return (
    <Pagination
      defaultCurrent={pageNumber}
      defaultPageSize={pageSize}
      pageSizeOptions={['9', '18', '36', '72']}
      total={total}
      onChange={(page, pageSize) => {
        dispatch(setPageNumber(page));
        dispatch(setPageSize(pageSize));
      }}
      style={{ marginTop: '5%' }}
    />
  );
};

export default Footer;
