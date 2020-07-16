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
