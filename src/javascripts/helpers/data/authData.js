import firebase from 'firebase/app';
import 'firebase/auth';

// import landingPage from '../../components/landingPage/landingPage';

const checkLoginStatus = () => {
  const logoutButton = $('#navbar-logout-button');
  const loginButton = $('#auth');
  // const editBtn = $('#edit');
  // const dltBtn = $('#delete');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // landingPage.addDiv();
      $('.auth-button').removeClass('hide');
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      // editBtn.removeClass('hide');
      // dltBtn.removeClass('hide');
    } else {
      // landingPage.removeDiv();
      $('.auth-button').addClass('hide');
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      // editBtn.addClass('hide');
      // dltBtn.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
