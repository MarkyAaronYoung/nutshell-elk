import table from '../foodMaker/foodMaker';
import foodData from '../../helpers/data/foodData';
import utils from '../../helpers/utils';
import './addFood.scss';

const showAddFoodForm = () => {
  // $('#new-food').removeClass('hide');
  // table.authFood();
  const addString = `
  <tbody>
    <tr class="add-food">
      <th scope="row"><input type="text" id="addFood-name"></th>
      <td><input type="text" id="addFood-price"></td>
      <td class="edit"><button type="button" class="btn btn-dark"><i class="fas fa-user-edit"></i></button></td>
      <td><button type="button" id="food-delete" class="btn btn-dark"><i class="fas fa-trash-alt"></i></button></td>
     <td><div>
     <input type="checkbox" id="addFood-checkbox" name="food">
      <label for="food"></label>
      </div></td>
    </tr>
  </tbody>
  `;

  let rowString = '';
  foodData.getFoods()
    .then((foods) => {
      const headerString = `
      <h2>Menu</h2>
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
        rowString += table.foodMakerAuth(food);
      });
      const domString = `<table class='table table-bordered'>` + headerString + rowString + addString + `</table>` + `<div class="text-center"><button type="submit" class="btn btn-primary" id="food-adder">Add to the List!</button></div>` // eslint-disable-line
      utils.printToDom('#food', domString);
    });
  // const domString = `
  // <form>
  // <div class="form-group">
  //   <label for="addFood-name">Food Name</label>
  //   <input type="text" class="form-control" id="addFood-name">
  // </div>
  // <div class="form-group">
  //   <label for="addFood-price">Price $</label>
  //   <input type="text" class="form-control" id="addFood-price">
  // </div>
  // <div class="form-check">
  //   <input type="checkbox" class="form-check-input" id="addFood-checkbox">
  //   <label class="form-check-label" for="addFood-checkbox">Is Currently Available</label>
  // </div>
  // <button type="submit" class="btn btn-primary" id="food-adder">Add to the List!</button>
  // </form>
  // `;
  // utils.printToDom('#food', domString);
};

export default { showAddFoodForm };
