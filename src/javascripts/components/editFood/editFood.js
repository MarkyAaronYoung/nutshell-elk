import foodData from '../../helpers/data/foodData';
import utils from '../../helpers/utils';

const showFoodEditForm = (foodId) => {
  foodData.getFoods(foodId)
    .then((response) => {
      const food = response.data;
      console.warn(response.data);
      const domString = `
      <h3>Edit Food</h3>
      <form class="modify-food" id=${foodId}>
        <div class="form-group">
          <label for="addFood-name">Food Name</label>
          <input type="text" class="form-control" id="editFood-name" value="${food.name}>
        </div>
        <div class="form-group">
          <label for="addFood-price">Price $</label>
          <input type="text" class="form-control" id="editFood-price" value=${food.price}>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="editFood-checkbox" ${food.isAvailable ? 'checked' : ''}>
          <label class="form-check-label" for="addFood-checkbox">Is Currently Available</label>
        </div>
        <button type="submit" class="btn btn-primary" id="food-editor">Update!</button>
      </form>
      `;
      utils.printToDom('#new-food', domString);
    })
    .catch((err) => console.error('get single food to edit failed', err));
};

export default { showFoodEditForm };
