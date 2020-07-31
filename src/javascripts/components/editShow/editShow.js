import utils from '../../helpers/utils';
import showData from '../../helpers/data/showData';

const editShowForm = (showId) => {
  let domString = '';
  showData.getShowById(showId)
    .then((response) => {
      const show = response.data;
      domString += `<form>
                      <div class="form-group" id="show-id-finder" data-show-id=${showId}>
                        <label for="editShow-name">Name</label>
                        <input type="text" class="form-control" id="editShow-name" value="${show.name}">
                      </div>
                      <div class="form-group">
                        <label for="editShow-length">Show Length</label>
                        <input type="text" class="form-control" id="editShow-length" value="${show.length}">
                      </div>
                      <div class="form-group">
                        <label for="editShow-description">Show Description</label>
                        <input type="text" class="form-control" id="editShow-description" value="${show.description}">
                      </div>
                      <div class="form-group">
                        <label for="editShow-price">Price</label>
                        <input type="text" class="form-control" id="editShow-price" value="${show.price}">
                      </div>
                      <div class="form-group">
                        <label for="editShow-imageUrl">Show Image Url</label>
                        <input type="text" class="form-control" id="editShow-imageUrl" value="${show.imageUrl}">
                      </div>
                      <button type="submit" class="btn btn-primary" id="show-editor">Update!</button>
                    </form>`;
      utils.printToDom('#new-show', domString);
    })
    .catch((err) => console.error(err));
};

export default { editShowForm };
