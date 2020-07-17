import firebase from 'firebase/app';
import 'firebase/auth';
// import landingPage from '../components/landingPage/landingPage';

const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

const resetPage = () => {
  $('#home').click((e) => {
    console.error('thise works', e);
    e.preventDefault();
    $('#landingPage').removeClass('hide');
    $('#components').addClass('hide');
  });
};

export default { logoutEvent, resetPage };
