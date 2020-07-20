import firebase from 'firebase/app';
import 'firebase/auth';

import showBuilder from '../showBuilder/showBuilder';
import addShow from '../addShow/addShow';
import showData from '../../helpers/data/showData';
import editShow from '../editShow/editShow';

import utils from '../../helpers/utils';
import './showList.scss';

const showViewEvent = (e) => {
  e.preventDefault();
  $('#shows').removeClass('hide');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      showBuilder.showCardBuilder();
    } else {
      showBuilder.noAuthShowCardBuilder();
    }
  });
};

const addShowEvent = (e) => {
  e.preventDefault();
  const newShowObj = {
    name: $('#addShow-name').val(),
    length: $('#addShow-length').val(),
    description: $('#addShow-description').val(),
    imageUrl: $('#addShow-imageUrl').val(),
  };

  showData.addShow(newShowObj)
    .then(() => {
      showBuilder.showCardBuilder();
      utils.printToDom('#new-show', '');
    })
    .catch((err) => console.error(err));
};

const removeShowEvent = (e) => {
  e.preventDefault();
  const showId = e.target.closest('.show-card').id;
  showData.deleteShow(showId)
    .then(() => {
      showBuilder.showCardBuilder();
    })
    .catch((err) => console.error(err));
};

const editShowEvent = (e) => {
  e.preventDefault();
  const { showId } = document.querySelector('#show-id-finder').dataset;
  const updatedShow = {
    name: $('#editShow-name').val(),
    length: $('#editShow-length').val(),
    description: $('#editShow-description').val(),
    imageUrl: $('#editShow-imageUrl').val(),
  };

  showData.editShow(showId, updatedShow)
    .then(() => {
      showBuilder.showCardBuilder();
      utils.printToDom('#new-show', '');
    })
    .catch((err) => console.error(err));
};

const editFormEvent = (e) => {
  e.preventDefault();
  $('#new-show').removeClass('hide');
  const showId = e.target.closest('.show-card').id;
  console.error(showId);
  editShow.editShowForm(showId);
};

const showEvents = () => {
  $('body').on('click', '#viewShows', showViewEvent);
  $('body').on('click', '#add-show', addShow.addShowForm);
  $('body').on('click', '#show-adder', addShowEvent);
  $('body').on('click', '#delete-show', removeShowEvent);
  $('body').on('click', '#update-show', editFormEvent);
  $('body').on('click', '#show-editor', editShowEvent);
};

export default { showEvents };
