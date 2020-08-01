import utils from '../../helpers/utils';
import foodData from '../../helpers/data/foodData';
import staffData from '../../helpers/data/staffData';
import souvData from '../../helpers/data/souvData';

const createFoodSelectList = () => {
  let domString = `
    <label for="eventFoodSelect">Choose Food:</label>
    <select name="foods" id="eventFoodSelect">
  `;

  foodData.getFoods()
    .then((foods) => {
      foods.forEach((food) => {
        domString += `<option value=${food.id}>${food.name}</option>`;
      });
      domString += '</select>';
      utils.printToDom('#eventFoodLander', domString);
    });
};

const createStaffSelectList = () => {
  let domString = `
    <label for="eventFoodSelect">Choose Food:</label>
    <select name="foods" id="eventFoodSelect">
  `;

  staffData.getStaff()
    .then((staffs) => {
      staffs.forEach((staff) => {
        domString += `<option value=${staff.id}>${staff.name}</option>`;
      });
      domString += '</select>';
      utils.printToDom('#eventStaffLander', domString);
    });
};

const createSouvSelectList = () => {
  let domString = `
    <label for="eventFoodSelect">Choose Food:</label>
    <select name="foods" id="eventFoodSelect">
  `;

  souvData.getSouv()
    .then((souvs) => {
      souvs.forEach((souv) => {
        domString += `<option value=${souv.id}>${souv.name}</option>`;
      });
      domString += '</select>';
      utils.printToDom('#eventSouvLander', domString);
    });
};

const addNewEventForm = (e) => {
  e.preventDefault();
  $('#new-event').removeClass('hide');
  const domString = `<form>
      <div class="form-group">
        <label for="addEvent-name">Event Name</label>
        <input type="text" class="form-control" id="addEvent-name">
      </div>
      <div class="form-group" id="eventFoodLander"></div>
      <div class="form-group" id="eventStaffLander"></div>
      <div class="form-group" id="eventSouvLander"></div>
      <button type="submit" class="btn btn-light" id="event-adder">Update!</button>
    </form>`;
  utils.printToDom('#new-event', domString);
  createFoodSelectList();
  createStaffSelectList();
  createSouvSelectList();
};

export default { addNewEventForm };
