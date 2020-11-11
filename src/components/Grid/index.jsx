import React from 'react';
import './index.css';
import ImgCard from '../Card';
import { useDispatch, useSelector } from 'react-redux';
import { selectImgs, selectSearching } from '../SearchBar/searchSlice';
import { Spin } from 'antd';

const Grid = () => {
  const imgs = useSelector(selectImgs);
  const loading = useSelector(selectSearching);

  if (!imgs.length) return null;

  return (
    <div className="gridContainer">
      {loading && <Spin tip="Loading images...." />}
      {imgs.map((img) => (
        <ImgCard img={img} key={img.id} />
      ))}
    </div>
  );
};

export default Grid;
