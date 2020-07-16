import foodData from '../../helpers/data/foodData';
import menu from '../foodMaker/foodMaker';
import utils from '../../helpers/utils';

import './foodList.scss';

const buildFoods = (e) => {
  e.preventDefault();
  $('#food').removeClass('hide');
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
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
         <th scope="col">Is Available?</th>
        </tr>
      </thead>
      `;
      foods.forEach((food) => {
        if (food.isAvailable === true) {
          rowString += menu.foodMaker(food);
        }
      });

      const domString = `<table class='table table-bordered'>` + headerString + rowString + `</table>` // eslint-disable-line
      utils.printToDom('#food', domString);
    })
    .catch((err) => console.error('it broke', err));
};

// const foodEvents = () => {
// };

export default { buildFoods };
