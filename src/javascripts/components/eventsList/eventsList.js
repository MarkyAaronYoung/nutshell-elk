import firebase from 'firebase/app';
import 'firebase/auth';

import eventPageComponent from '../eventMaker/eventMaker';

import './eventsList.scss';

const viewEvents = () => {
  $('#events-page').removeClass('hide');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      eventPageComponent.eventPageMaker();
    } else {
      eventPageComponent.noAuthEventPageMaker();
    }
  });
};

const eventEvents = () => {
  $('body').on('click', '#viewEvents', viewEvents);
};

export default { eventEvents };
