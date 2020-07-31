import eventPageComponent from '../eventMaker/eventMaker';

import './eventsList.scss';
import smash from '../../helpers/data/smash';

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

const eventEvents = () => {
  $('body').on('click', '#viewEvents', viewEvents);
};

const individualEventEvents = () => {
  $('body').on('click', '#viewIndividualEvent', viewIndividualEvent);
};

export default { eventEvents, individualEventEvents };
