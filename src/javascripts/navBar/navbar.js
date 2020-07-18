import firebase from 'firebase/app';
import 'firebase/auth';
import landingPage from '../components/landingPage/landingPage';

const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

const resetPage = () => {
  $('#test-home').click((e) => {
    console.error('thise works', e);
    e.preventDefault();
    $('#landingPage').removeClass('hide');
    $('#food').addClass('hide');
    $('#souvenirs').addClass('hide');
    $('#shows').addClass('hide');
    $('#staff').addClass('hide');
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
