import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImgName, selectImgName, fetchImgs } from './searchSlice';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const inputText = useSelector(selectImgName);

  const onSearch = async () => {
    if (!inputText) return;
    await dispatch(fetchImgs());
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
    <Input
      placeholder="input search text"
      onChange={(e) => dispatch(setImgName(e.target.value))}
      suffix={suffix}
      allowClear
      size="large"
      style={{ borderRadius: '25px', width: '534px', marginTop: '8%' }}
      className="searchBar"
      onPressEnter={onSearch}
    />
  );
};

export default SearchBar;
