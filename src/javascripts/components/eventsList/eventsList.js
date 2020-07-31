import eventPageComponent from '../eventMaker/eventMaker';
import addEvent from '../addEvent/addEvent';

<<<<<<< HEAD
import smash from '../../helpers/data/smash';
import eventData from '../../helpers/data/eventData';
import utils from '../../helpers/utils';

import './eventsList.scss';
=======
import './eventsList.scss';

import smash from '../../helpers/data/smash';
import eventData from '../../helpers/data/eventData';
import utils from '../../helpers/utils';
>>>>>>> 48bccd2904ec3f1ce97b959159e6231429102dff

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

<<<<<<< HEAD
const addNewEvent = (e) => {
  e.preventDefault();
  const newEventObj = {
    name: $('#addEvent-name').val(),
  };

=======
const addNewEvent = () => {
  const newEventObj = {
    name: $('#addEvent-name').val(),
  };
>>>>>>> 48bccd2904ec3f1ce97b959159e6231429102dff
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
