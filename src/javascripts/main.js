import '../styles/main.scss';
import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';
import landing from './components/landingPage/landingPage';
import home from './navBar/navbar';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  auth.logoutButton();
  landing.buildLandingPage();
  landing.viewEvents();
  home.resetPage();
};

init();
