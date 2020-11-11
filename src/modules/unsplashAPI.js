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

export const downloadImgAPI = async (imgId) =>
  await unsplash.photos
    .getPhoto(imgId)
    .then(toJson)
    .then((json) => {
      console.log(json);
      unsplash.photos.downloadPhoto(json);
    });
