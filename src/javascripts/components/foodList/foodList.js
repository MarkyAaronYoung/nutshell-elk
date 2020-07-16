import foodData from '../../helpers/data/foodData';
import menu from '../foodMaker/foodMaker';
import utils from '../../helpers/utils';

const buildFoods = (e) => {
  e.preventDefault();
  $('#food').removeClass('hide');
  foodData.getFoods()
    .then((foods) => {
      let domString = `
      <div>
      <h1>MENU</h1>
      <table class="table">
      <thead>
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
          domString += menu.foodMaker(food);
        }
      });

      domString += `</div>
      `;

      utils.printToDom('#food', domString);
    })
    .catch((err) => console.error('it broke', err));
};

// const foodEvents = () => {
// };

export default { buildFoods };
