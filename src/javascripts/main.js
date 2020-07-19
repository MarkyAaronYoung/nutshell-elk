import '../styles/main.scss';
import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';
import landing from './components/landingPage/landingPage';
import home from './components/navBar/navbar';

const init = () => {
  home.resetPage();
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  auth.logoutButton();
  landing.buildLandingPage();
};

init();
