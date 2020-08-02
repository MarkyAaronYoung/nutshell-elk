import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getEventShow = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventShow.json`)
    .then((response) => {
      const eventShowObjects = response.data;
      const eventShow = [];
      Object.keys(eventShowObjects).forEach((eventShowId) => {
        eventShowObjects[eventShowId].id = eventShowId;
        eventShow.push(eventShowObjects[eventShowId]);
      });
      resolve(eventShow);
    })
    .catch((err) => reject(err));
});

const getEventShowById = (eventShowId) => axios.get(`${baseUrl}/eventShow/${eventShowId}.json`);

export default {
  getEventShow,
  getEventShowById,
};
