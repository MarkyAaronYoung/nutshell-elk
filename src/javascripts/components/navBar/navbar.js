import firebase from 'firebase/app';
import 'firebase/auth';
import landingPage from '../landingPage/landingPage';

const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

const resetPage = () => {
  $('#test-home').click((e) => {
    e.preventDefault();
    $('#landingPage').removeClass('hide');
    $('#food').addClass('hide');
    $('#add-food').addClass('hide');
    $('#edit-food').addClass('hide');
    $('#souvenirs').addClass('hide');
    $('#new-souv').addClass('hide');
    $('#edit-souv').addClass('hide');
    $('#shows').addClass('hide');
    $('#new-show').addClass('hide');
    $('#edit-show').addClass('hide');
    $('#staff').addClass('hide');
    $('#new-staff').addClass('hide');
    $('#edit-staff').addClass('hide');
    landingPage.buildLandingPage();
  });
};

// const showComponents = () => {
//   $('.view').click((e) => {
//     console.error('working');
//     e.preventDefault();
//     $('#components').removeClass('hide');
//   });
// };

export default { logoutEvent, resetPage };
