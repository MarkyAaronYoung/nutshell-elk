import firebase from 'firebase/app';
import 'firebase/auth';

import home from '../../components/navBar/navbar';
import landingPage from '../../components/landingPage/landingPage';
import souvList from '../../components/souvList/souvList';
import staffList from '../../components/buildStaff/buildStaff';
import showList from '../../components/showList/showList';
import foodList from '../../components/foodList/foodList';
import eventsList from '../../components/eventsList/eventsList';

const checkLoginStatus = () => {
  const logoutButton = $('#navbar-logout-button');
  const loginButton = $('#auth');

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('.auth-button').removeClass('hide');
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      home.eventsResetPage();
      landingPage.eventsLandingPage();
      souvList.souvEvents();
      staffList.staffEvents();
      showList.showEvents();
      foodList.foodListEvents();
      eventsList.eventEvents();
    } else {
      $('.auth-button').addClass('hide');
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      home.resetPage();
      landingPage.buildLandingPage();
      souvList.souvEvents();
      staffList.staffEvents();
      showList.showEvents();
      foodList.foodListEvents();
    }
  });
};

export default { checkLoginStatus };
