import utils from '../../helpers/utils';
import './addSouv.scss';

const addSouvForm = (e) => {
  e.preventDefault();
  console.error(e);
  $('#new-souv').removeClass('hide');
  const domString = `<form>
                      <div class="form-group">
                        <label for="addSouv-name">Souvenir Name</label>
                        <input type="text" class="form-control" id="addSouv-name">
                      </div>
                      <div class="form-group">
                        <label for="addSouv-price">Price</label>
                        <input type="text" class="form-control" id="addSouv-price">
                      </div>
                      <div class="form-group">
                        <label for="addSouv-description">Item Description</label>
                        <input type="text" class="form-control" id="addSouv-description">
                      </div>
                      <div class="form-group">
                        <label for="addSouv-imageUrl">image Url</label>
                        <input type="text" class="form-control" id="addSouv-imageUrl">
                      </div>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Is Currently Available</label>
                      </div>
                      <button type="submit" class="btn btn-primary" id="souv-adder">Update!</button>
                    </form>`;

  utils.printToDom('#new-souv', domString);
};

export default { addSouvForm };
