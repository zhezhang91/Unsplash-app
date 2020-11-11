import Unsplash, { toJson } from 'unsplash-js';
import { ACCESS_KEY } from '../constants';

export const unsplash = new Unsplash({
  accessKey: ACCESS_KEY,
});

export const fetchImgsAPI = async (imgName, { pageNumber, pageSize }) =>
  await unsplash.search
    .photos(imgName, pageNumber, pageSize, {
      orientation: 'portrait',
    })
    .then(toJson);
