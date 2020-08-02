import eventPageComponent from '../eventMaker/eventMaker';
import addEvent from '../addEvent/addEvent';

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
      <h2 class=>${event.name}</h2>
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
        <thead class ="colored">
          <tr>
            <th>Souvenirs</th>
          </tr>
          </thead>
          <tr>
            <td>${event.souv.name}</td>
          </tr>
        </table>
        </div>
        </div>
      `;
      console.warn('This does work!', event);
      utils.printToDom('#individual-event', domString);
    });

  $('#events-page').addClass('hide');
  $('#individual-event').removeClass('hide');
};

const addNewEvent = (e) => {
  e.preventDefault();
  const newEventObj = {
    name: $('#addEvent-name').val(),
  };

  eventData.addEvent(newEventObj)
    .then(() => {
      eventPageComponent.eventPageMaker();
      utils.printToDom('#new-event', '');
    })
    .catch((err) => console.error(err));
};

const eventEvents = () => {
  $('body').on('click', '#viewEvents', viewEvents);
  $('body').on('click', '#add-event', addEvent.addNewEventForm);
  $('body').on('click', '#event-adder', addNewEvent);
};

const individualEventEvents = () => {
  $('body').on('click', '#viewIndividualEvent', viewIndividualEvent);
};

export default { eventEvents, individualEventEvents };
