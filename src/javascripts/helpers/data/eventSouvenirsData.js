import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getEventSouvenirs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventSouvenirs.json`)
    .then((response) => {
      const eventSouvenirsObjects = response.data;
      const eventSouvenir = [];
      Object.keys(eventSouvenirsObjects).forEach((eventSouvenirId) => {
        eventSouvenirsObjects[eventSouvenirId].id = eventSouvenirId;
        eventSouvenir.push(eventSouvenirsObjects[eventSouvenirId]);
      });
      resolve(eventSouvenir);
    })
    .catch((err) => reject(err));
});

const getEventSouvenirsById = (eventSouvenirId) => axios.get(`${baseUrl}/eventSouvenirs/${eventSouvenirId}.json`);

export default {
  getEventSouvenirs,
  getEventSouvenirsById,
};
