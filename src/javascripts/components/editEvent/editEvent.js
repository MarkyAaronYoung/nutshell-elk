import utils from '../../helpers/utils';
import foodData from '../../helpers/data/foodData';
import staffData from '../../helpers/data/staffData';
import souvData from '../../helpers/data/souvData';
import showData from '../../helpers/data/showData';

const createFoodSelectList = () => {
  let domString = `
    <label for="eventEditFoodSelect">Change Food:</label>
    <select name="foods" id="eventEditFoodSelect">
  `;

  foodData.getFoods()
    .then((foods) => {
      foods.forEach((food) => {
        domString += `<option value=${food.id}>${food.name}</option>`;
      });
      domString += '</select>';
      utils.printToDom('#eventEditFoodLander', domString);
    });
};

const createStaffSelectList = () => {
  let domString = `
    <label for="eventEditStaffSelect">Change Staff:</label>
    <select name="staff" id="eventEditStaffSelect">
    `;

  staffData.getStaff()
    .then((staffs) => {
      staffs.forEach((staff) => {
        domString += `<option value=${staff.id}>${staff.name}</option>`;
      });
      domString += '</select>';
      utils.printToDom('#eventEditStaffLander', domString);
    });
};

const createSouvSelectList = () => {
  let domString = `
    <label for="eventEditSouvSelect">Change Souvenir:</label>
    <select name="souvs" id="eventEditSouvSelect">
    `;

  souvData.getSouv()
    .then((souvs) => {
      souvs.forEach((souv) => {
        domString += `<option value=${souv.id}>${souv.name}</option>`;
      });
      domString += '</select>';
      utils.printToDom('#eventEditSouvLander', domString);
    });
};

const createShowSelectList = () => {
  let domString = `
    <label for="eventEditShowSelect">Change Show:</label>
    <select name="show" id="eventEditShowSelect">
    `;

  showData.getShows()
    .then((shows) => {
      shows.forEach((show) => {
        domString += `<option value=${show.id}>${show.name}</option>`;
      });
      domString += '</select>';
      utils.printToDom('#eventEditShowLander', domString);
    });
};

const eventEditForm = (e) => {
  e.preventDefault();
  $('#edit-event-food').removeClass('hide');
  const domString = `<form> 
        <div class="form-group">
          <label for="editEvent-name">Event Name</label>
          <input type="text" class="form-control" id="editEvent-name">
        </div>
        <div class="form-group" id="eventEditFoodLander"></div>
        <div class="form-group" id="eventEditStaffLander"></div>
        <div class="form-group" id="eventEditSouvLander"></div>
        <div class="form-group" id="eventEditShowLander"></div>
        <button type="submit" class="btn btn-light" id="event-edit">Update!</button>
        </form>`;
  utils.printToDom('#edit-event-food', domString);
  createFoodSelectList();
  createStaffSelectList();
  createSouvSelectList();
  createShowSelectList();
};

export default { eventEditForm };
