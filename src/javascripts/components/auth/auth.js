import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';
import landing from '../landingPage/landingPage';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = '<div class="ml-auto"><button id="google-auth" class="btn btn-warning"><i class="fab fa-google fa-lg"></i> Login</button></div>';
  utils.printToDom('#auth', domString);
  $('#google-auth').click(signMeIn);
  landing.buildLandingPage();
  $('#landingPage').removeClass('hide');
};

const logoutButton = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
    landing.buildLandingPage();
    $('#landingPage').removeClass('hide');
  });
};

export default { loginButton, logoutButton };
