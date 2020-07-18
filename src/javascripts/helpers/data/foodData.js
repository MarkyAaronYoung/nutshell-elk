import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getFoods = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/foods.json`)
    .then((response) => {
      const foodObjects = response.data;
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

const addFood = (newFoodObj) => axios.post(`${baseUrl}/foods.json`, newFoodObj);

const getFoodById = (foodId) => axios.get(`${baseUrl}/foods/${foodId}.json`);

const deleteFood = (foodId) => axios.delete(`${baseUrl}/foods/${foodId}.json`);

const updateFood = (foodId, editedFood) => axios.put(`${baseUrl}/foods/${foodId}.json`, editedFood);

export default {
  getFoods,
  addFood,
  deleteFood,
  updateFood,
  getFoodById,
};
