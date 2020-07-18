import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getShows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shows.json`)
    .then((response) => {
      const showObjects = response.data;
      const shows = [];

      if (showObjects) {
        Object.keys(showObjects).forEach((showId) => {
          showObjects[showId].id = showId;
          shows.push(showObjects[showId]);
        });
      }

      resolve(shows);
    })
    .catch((err) => reject(err));
});

const getShowById = (showId) => axios.get(`${baseUrl}/shows/${showId}.json`);

const addShow = (newShowObj) => axios.post(`${baseUrl}/shows.json`, newShowObj);

const deleteShow = (showId) => axios.delete(`${baseUrl}/shows/${showId}.json`);

const editShow = (showId, updatedShow) => axios.put(`${baseUrl}/shows/${showId}.json`, updatedShow);

export default {
  getShows,
  getShowById,
  addShow,
  deleteShow,
  editShow,
};
