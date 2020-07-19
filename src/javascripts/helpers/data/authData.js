import firebase from 'firebase/app';
import 'firebase/auth';
import souvList from '../../components/souvList/souvList';
import staffList from '../../components/buildStaff/buildStaff';
import showList from '../../components/showList/showList';
import foodList from '../../components/foodList/foodList';

const checkLoginStatus = () => {
  const logoutButton = $('#navbar-logout-button');
  const loginButton = $('#auth');

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('.auth-button').removeClass('hide');
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      souvList.souvEvents();
      staffList.staffEvents();
      showList.showEvents();
      foodList.foodListEvents();
    } else {
      $('.auth-button').addClass('hide');
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      souvList.souvEvents();
      staffList.staffEvents();
      showList.showEvents();
      foodList.foodListEvents();
    }
  });
};

export default { checkLoginStatus };
