import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setImgName,
  selectImgName,
  fetchImgs,
  setImgs,
  selectImgs,
} from './searchSlice';
import { setPageNumber, setTotal } from '../Footer/paginationSlice';
import { Input, Modal } from 'antd';
import { SearchOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './index.css';
import { scrollToTop } from '../utils';
const { confirm } = Modal;

const SearchBar = () => {
  const dispatch = useDispatch();
  const inputText = useSelector(selectImgName);
  const imgs = useSelector(selectImgs);

  useEffect(() => {
    if (!imgs.length && inputText)
      return confirm({
        title: 'No Results found!',
        icon: <ExclamationCircleOutlined />,
        content:
          'Sorry, we can not find what you want, please input another keyword, thank you!',
      });
  }, [imgs]);

  const onSearch = async () => {
    if (!inputText) return;
    dispatch(setPageNumber(1));
    await dispatch(fetchImgs());
    scrollToTop();
  };

  const onChange = (e) => {
    const text = e.target.value;
    dispatch(setImgName(text));
    if (!text) {
      dispatch(setImgs([]));
      dispatch(setTotal(0));
    }
  };
  const suffix = (
    <SearchOutlined
      style={{
        fontSize: 24,
      }}
      onClick={onSearch}
    />
  );

  return (
    <div className="searchBarContainer">
      {' '}
      <h1>Image Search Engine</h1>{' '}
      <Input
        placeholder="What images you want to search?"
        onChange={onChange}
        suffix={suffix}
        allowClear
        size="large"
        style={{ borderRadius: '25px', width: '534px' }}
        onPressEnter={onSearch}
        data-testid="searchBarInput"
      />
    </div>
  );
};

export default SearchBar;
