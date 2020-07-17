import utils from '../../helpers/utils';

const showAddFoodForm = () => {
  const domString = `
  <form>
  <div class="form-group">
    <label for="addFood-name">Food Name</label>
    <input type="text" class="form-control" id="addFood-name">
  </div>
  <div class="form-group">
    <label for="addFood-price">Price</label>
    <input type="text" class="form-control" id="addFood-price">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Is Currently Available</label>
  </div>
  <button type="submit" class="btn btn-primary" id="food-adder">Update!</button>
  </form>
  `;
  utils.printToDom('#new-food', domString);
};

export default { showAddFoodForm };
