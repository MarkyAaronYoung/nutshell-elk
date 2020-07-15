import firebase from 'firebase/app';
import 'firebase/auth';
// import landingPage from '../../components/landingPage/landingPage';

const checkLoginStatus = () => {
  const logoutButton = $('#navbar-logout-button');
  const loginButton = $('#auth');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // landingPage.addDiv();
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
    } else {
      // landingPage.removeDiv();
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
