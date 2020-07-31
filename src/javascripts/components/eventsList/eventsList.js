import eventPageComponent from '../eventMaker/eventMaker';
import addEvent from '../addEvent/addEvent';

import './eventsList.scss';

import smash from '../../helpers/data/smash';
import eventData from '../../helpers/data/eventData';
import utils from '../../helpers/utils';

const viewEvents = () => {
  $('#events-page').removeClass('hide');
  eventPageComponent.eventPageMaker();
};

const viewIndividualEvent = (e) => {
  const eventId = e.target.closest('.event-card').id;
  smash.getSingleEventInfo(eventId)
    .then(() => {
      console.warn('This does work!');
    });

  $('#events-page').addClass('hide');
  $('#individual-event').removeClass('hide');
};

const addNewEvent = () => {
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
