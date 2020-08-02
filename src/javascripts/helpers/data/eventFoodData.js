import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getEventFoods = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventFood.json`)
    .then((response) => {
      const eventFoodObjects = response.data;
      const eventFoods = [];
      Object.keys(eventFoodObjects).forEach((eventFoodId) => {
        eventFoodObjects[eventFoodId].id = eventFoodId;
        eventFoods.push(eventFoodObjects[eventFoodId]);
      });
      resolve(eventFoods);
    })
    .catch((err) => reject(err));
});

const getEventFoodById = (eventFoodId) => axios.get(`${baseUrl}/eventFood/${eventFoodId}.json`);

export default {
  getEventFoods,
  getEventFoodById,
};
