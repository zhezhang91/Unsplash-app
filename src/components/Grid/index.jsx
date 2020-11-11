import React from 'react';
import './index.css';
import ImgCard from '../Card';
import { useSelector } from 'react-redux';
import { selectImgs, selectSearching } from '../SearchBar/searchSlice';
import { Spin } from 'antd';

const Grid = () => {
  const imgs = useSelector(selectImgs);
  const loading = useSelector(selectSearching);

  if (!imgs.length) return null;

  return (
    <div className="gridContainer" data-testid="gridContainer">
      {loading && <Spin tip="Loading images...." style={{ width: '100%' }} />}
      {imgs.map((img) => (
        <ImgCard img={img} key={img.id} />
      ))}
    </div>
  );
};

export default Grid;
