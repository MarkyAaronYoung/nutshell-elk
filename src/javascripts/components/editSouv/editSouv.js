import utils from '../../helpers/utils';
import souvData from '../../helpers/data/souvData';

const editSouvForm = (e) => {
  e.preventDefault();
  $('#edit-souv').removeClass('hide');

  const souvId = e.target.closest('.souv-card').id;
  let domString = '';

  souvData.getSouvById(souvId)
    .then((response) => {
      const souv = response.data;
      domString += `<form>
                      <div class="form-group" id="souv-id-finder" data-souv-id=${souvId}>
                        <label for="editSouv-name">Name</label>
                        <input type="text" class="form-control" id="editSouv-name" value="${souv.name}">
                      </div>
                      <div class="form-group">
                        <label for="editSouv-price">Price</label>
                        <input type="text" class="form-control" id="editSouv-price" value="${souv.price}">
                      </div>
                      <div class="form-group">
                        <label for="editSouv-description">Description</label>
                        <input type="text" class="form-control" id="editSouv-description" value="${souv.description}">
                      </div>
                      <div class="form-group">
                        <label for="editSouv-imageUrl">Image Url</label>
                        <input type="text" class="form-control" id="editSouv-imageUrl" value="${souv.imageUrl}">
                      </div>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="editSouv-isAvailable" ${souv.isAvailable ? 'checked' : ''}>
                        <label class="form-check-label" for="editSouv-isAvailable">Is Currently Available</label>
                      </div>
                      <button type="submit" class="btn btn-primary" id="souv-editor">Update!</button>
                    </form>`;
      utils.printToDom('#edit-souv', domString);
    })
    .catch((err) => console.error(err));
};

export default { editSouvForm };
