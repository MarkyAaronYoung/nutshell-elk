import utils from '../../helpers/utils';
import './addShow.scss';

const addShowForm = (e) => {
  e.preventDefault();
  $('#new-show').removeClass('hide');
  const domString = `<form>
                      <div class="form-group">
                        <label for="addShow-name">Event Name</label>
                        <input type="text" class="form-control" id="addShow-name">
                      </div>
                      <div class="form-group">
                        <label for="addShow-length">Event Length</label>
                        <input type="text" class="form-control" id="addShow-length">
                      </div>
                      <div class="form-group">
                        <label for="addShow-description">Event Description</label>
                        <input type="text" class="form-control" id="addShow-description">
                      </div>
                      <div class="form-group">
                        <label for="addShow-imageUrl">Event Image Url</label>
                        <input type="text" class="form-control" id="addShow-imageUrl">
                      </div>
                      <button type="submit" class="btn btn-primary" id="show-adder">Update!</button>
                    </form>`;
  utils.printToDom('#new-show', domString);
};

export default { addShowForm };
