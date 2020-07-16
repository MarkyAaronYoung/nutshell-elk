import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getFoods = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/foods.json`)
    .then((response) => {
      const foodObjects = response.data;
      console.error(response);
      const foods = [];
      if (foodObjects) {
        Object.keys(foodObjects).forEach((foodId) => {
          foodObjects[foodId].id = foodId;
          foods.push(foodObjects[foodId]);
        });
      }
      resolve(foods);
    })
    .catch((err) => reject(err));
});

export default { getFoods };
