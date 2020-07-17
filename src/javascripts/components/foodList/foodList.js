import firebase from 'firebase/app';
import 'firebase/auth';

import foodData from '../../helpers/data/foodData';
import menu from '../foodMaker/foodMaker';
import utils from '../../helpers/utils';

import './foodList.scss';

const buildFoods = (e) => {
  e.preventDefault();
  $('#food').removeClass('hide');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let rowString = '';
      foodData.getFoods()
        .then((foods) => {
          const headerString = `
            <h1>MENU</h1>
            <div class="text-center" id="food-button">
            <button type="button" id="add-food" class="btn btn-secondary">Add Food</button>
            </div>
            <thead>
            <thead class="colored">
              <tr>
                <th scope="col">Food</th>
                <th scope="col">Price</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              <th scope="col">Available</th>
              </tr>
            </thead>
            `;
          foods.forEach((food) => {
            rowString += menu.foodMakerAuth(food);
          });
          const domString = `<table class='table table-bordered'>` + headerString + rowString + `</table>` // eslint-disable-line
          utils.printToDom('#food', domString);
        });
    } else {
      let rowString = '';
      foodData.getFoods()
        .then((foods) => {
          const headerString = `
          <h1>MENU</h1>
          <thead>
          <thead class="colored">
            <tr>
              <th scope="col">Food</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          `;
          foods.forEach((food) => {
            if (food.isAvailable === true) {
              rowString += menu.foodMakerNoAuth(food);
            }
          });
          const domString = `<table class='table table-bordered'>` + headerString + rowString + `</table>` // eslint-disable-line
          utils.printToDom('#food', domString);
        });
    }
  })
    .catch((err) => console.error('it broke', err));
};

const addFoodEvent = (e) => {
  e.preventDefault();
  const newFood = {
    name: $('#addFood-name').val(),
    price: $('#addFood-price').val() * 1,
    isAvailable: true,
  };
  console.warn(newFood);
  foodData.addFood(newFood)
    .then(() => {
      
    })
}

export default { buildFoods, addFoodEvent };
