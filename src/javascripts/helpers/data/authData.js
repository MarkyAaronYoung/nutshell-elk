import firebase from 'firebase/app';
import 'firebase/auth';
import souvList from '../../components/souvList/souvList';
import foodList from '../../components/foodList/foodList';

// import landingPage from '../../components/landingPage/landingPage';

const checkLoginStatus = () => {
  const logoutButton = $('#navbar-logout-button');
  const loginButton = $('#auth');

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // landingPage.addDiv();
      $('.auth-button').removeClass('hide');
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      souvList.souvEvents();
      foodList.foodListEvents();
    } else {
      // landingPage.removeDiv();
      $('.auth-button').addClass('hide');
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      souvList.souvEvents();
    }
  });
};

export default { checkLoginStatus };
