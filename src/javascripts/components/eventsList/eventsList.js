import eventPageComponent from '../eventMaker/eventMaker';
import addEvent from '../addEvent/addEvent';
import buildFinances from '../finances/finances';
import editEvent from '../editEvent/editEvent';

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
      <div id="finance-btn">
      <button type="button" id="finances" class="btn btn-secondary ml-auto finances">Finances</button>
      </div>
      </div>
      <div id="app" data-event-id="${eventId}">
      <div class="food-staff-container text-center">
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
        </div>
        </div>
        <div class="show-souv-container text-center">
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
        </div>
        <div id="edit">
        <button type="button" id="edited-event" class="btn btn-secondary">Edit Event</button>
        </div>
      `;
      console.warn(event);
      utils.printToDom('#individual-event', domString);
    });

  $('#events-page').addClass('hide');
  $('#individual-event').removeClass('hide');
};

const viewFinances = (e) => {
  $('#finance-page').removeClass('hide');
  console.warn(e);
  const { eventId } = document.getElementById('app').dataset;
  buildFinances.buildFinances(eventId);
};

const addNewEvent = (e) => {
  e.preventDefault();
  const newEventObj = {
    name: $('#addEvent-name').val(),
    foodId: $('#eventFoodSelect').val(),
    staffId: $('#eventStaffSelect').val(),
    souvenirId: $('#eventSouvSelect').val(),
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

const editIndEvent = (e) => {
  e.preventDefault();
  const editedEventObj = {
    name: $('#editEvent-name').val(),
    foodId: $('#eventEditFoodSelect').val(),
    staffId: $('#eventEditStaffSelect').val(),
    souvenirId: $('#eventEditSouvSelect').val(),
    showId: $('#eventEditShowSelect').val(),
  };
  console.warn(editedEventObj);
  const { eventId } = document.getElementById('app').dataset;
  eventData.editEvent(eventId, editedEventObj)
    .then(() => {
      eventPageComponent.eventPageMaker();
      utils.printToDom('#edit-event', '');
    })
    .catch((err) => console.error(err));
};

const eventEvents = () => {
  $('body').on('click', '#viewEvents', viewEvents);
  $('body').on('click', '#add-event', addEvent.addNewEventForm);
  $('body').on('click', '#event-adder', addNewEvent);
  $('body').on('click', '#delete-event', removeEventEvent);
  $('body').on('click', '#finances', viewFinances);
  $('body').on('click', '#edited-event', editEvent.eventEditForm);
  $('body').on('click', '#event-edit', editIndEvent);
};

const individualEventEvents = () => {
  $('body').on('click', '#viewIndividualEvent', viewIndividualEvent);
};

export default { eventEvents, individualEventEvents };
