import eventPageComponent from '../eventMaker/eventMaker';
import addEvent from '../addEvent/addEvent';
import buildFinances from '../finances/finances';

import smash from '../../helpers/data/smash';
import eventData from '../../helpers/data/eventData';
import utils from '../../helpers/utils';

import './eventsList.scss';

const viewEvents = () => {
  $('#events-page').removeClass('hide');
  eventPageComponent.eventPageMaker();
};

const viewIndividualEvent = (e) => {
  const eventId = e.target.closest('.event-card').id;
  smash.getSingleEventInfo(eventId)
    .then((event) => {
      const domString = `
      <div class="text-right">
      <h2 class=>${event.name}</h2>
      <button type="button" id="finances" class="btn btn-secondary ml-auto">Finances</button>
      </div>
      <div id="app">
       <div id="food" class="quad">
        <table class='table table-bordered'>
        <thead class ="colored">
          <tr>
            <th>Food</th>
          </tr>
          </thead>
          <tr>
            <td>${event.food.name}</td>
          </tr>
          </table>
          <button type="button" id="edit-food" class="btn btn-secondary">Edit Food</button>
        </div>
        <div id="staff" class="quad">
        <table class='table table-bordered'>
        <thead class ="colored">
          <tr>
            <th>Staff</th>
          </tr>
          </thead>
          <tr>
            <td>${event.staff.name}</td>
          </tr>
        </table>
        <button type="button" id="edit-staff" class="btn btn-secondary">Edit Staff</button>
        </div>
        <div id="show" class="quad">
        <table class='table table-bordered'>
        <thead class ="colored">
          <tr>
            <th>Show</th>
          </tr>
          </thead>
          <tr>
            <td>${event.show.name}</td>
          </tr>
        </table>
        <button type="button" id="edit-show" class="btn btn-secondary">Edit Show</button>
        </div>
        <div id="Souvenirs" class="quad">
        <table class='table table-bordered'>
        <thead class="colored">
          <tr>
            <th>Souvenirs</th>
          </tr>
          </thead>
          <tr>
            <td>${event.souv.name}</td>
          </tr>
        </table>
        <button type="button" id="edit-souv" class="btn btn-secondary">Edit Souvenirs</button>
        </div>
      `;
      console.warn('This does work!', event);
      utils.printToDom('#individual-event', domString);
    });

  $('#events-page').addClass('hide');
  $('#individual-event').removeClass('hide');
};

const viewFinances = (e) => {
  $('#finances-page').removeClass('hide');
  console.warn(e);
  buildFinances.buildFinances();
  console.warn(buildFinances);
};

const addNewEvent = (e) => {
  e.preventDefault();
  const newEventObj = {
    name: $('#addEvent-name').val(),
    foodId: $('#eventFoodSelect').val(),
    staffId: $('#eventStaffSelect').val(),
    souvId: $('#eventSouvSelect').val(),
    showId: $('#eventShowSelect').val(),

  };

  eventData.addEvent(newEventObj)
    .then(() => {
      eventPageComponent.eventPageMaker();
      utils.printToDom('#new-event', '');
    })
    .catch((err) => console.error(err));
};

const removeEventEvent = (e) => {
  e.preventDefault();
  const eventId = e.target.closest('.event-card').id;
  eventData.deleteEvent(eventId)
    .then(() => {
      eventPageComponent.eventPageMaker();
    })
    .catch((err) => console.error(err));
};

const eventEvents = () => {
  $('body').on('click', '#viewEvents', viewEvents);
  $('body').on('click', '#add-event', addEvent.addNewEventForm);
  $('body').on('click', '#event-adder', addNewEvent);
  $('body').on('click', '#delete-event', removeEventEvent);
  $('body').on('click', '#finances', viewFinances);
};

const individualEventEvents = () => {
  $('body').on('click', '#viewIndividualEvent', viewIndividualEvent);
};

export default { eventEvents, individualEventEvents };
