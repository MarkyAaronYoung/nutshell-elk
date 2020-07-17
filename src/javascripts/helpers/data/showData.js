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

export default { getShows, getShowById };
