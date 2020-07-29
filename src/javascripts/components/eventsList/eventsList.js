// import firebase from 'firebase/app';
// import 'firebase/auth';

import eventPageMaker from '../eventMaker/eventMaker';

import './eventsList.scss';

const viewEventMaker = () => {
  eventPageMaker.eventPageMaker();
};

const eventEvents = () => {
  $('body').on('click', '#viewEvents', viewEventMaker);
};

export default { eventEvents };
