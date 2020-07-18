import firebase from 'firebase/app';
import 'firebase/auth';
import staffData from '../../helpers/data/staffData';
import utils from '../../helpers/utils';
// import authData from '../../helpers/data/authData';
import showForm from '../addStaff/addStaff';
import staffBuilder from './buildStaffers';
import editStaff from '../editStaff/editStaff';

import './buildStaff.scss';

const staffBuilders = (e) => {
  e.preventDefault();
  $('#staff').removeClass('hide');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      staffBuilder.staffMakerAuth();
    } else {
      staffBuilder.staffMakerNoAuth();
    }
  });
};
const buildNewStaff = (e) => {
  e.preventDefault();
  const newEmployee = {
    name: $('#addStaff-name').val(),
    jobTitle: $('#addStaff-jobTitle').val(),
    imageUrl: $('#addStaff-imageUrl').val(),
  };
  console.warn(newEmployee);
  staffData.addStaff(newEmployee)
    .then(() => {
      staffBuilder.staffMakerAuth();
      utils.printToDom('#new-staff', '');
    })
    .catch((err) => console.error('cant add staff', err));
};

const deleteStaffEvent = (e) => {
  e.preventDefault();
  const staffId = e.target.closest('.card').id;
  staffData.deleteStaff(staffId)
    .then(() => {
      staffBuilder.staffMakerAuth();
    })
    .catch((err) => console.error(err));
};

const showEditStaffForm = (e) => {
  e.preventDefault();
  editStaff.staffEditForm(e.target.closest('.card').id);
};

const editStaffEvent = (e) => {
  e.preventDefault();
  const staffId = e.target.closest('.modify-staff').id;

  const editedStaff = {
    name: $('#editStaff-name').val(),
    jobTitle: $('#editStaff-jobTitle').val(),
    imageUrl: $('#editStaff-imageUrl').val(),
  };

  staffData.updateStaff(staffId, editedStaff)
    .then(() => {
      utils.printToDom('#edit-staff', '');
      staffBuilder.staffMaker();
    })
    .catch((err) => console.error('cant edit staff', err));
};

const staffEvents = () => {
  $('body').on('click', '#viewStaff', staffBuilders);
  $('body').on('click', '#add-staff', showForm.showForm);
  $('body').on('click', '#staff-adder', buildNewStaff);
  $('body').on('click', '#delete-staff', deleteStaffEvent);
  $('body').on('click', '#edit-staff', showEditStaffForm);
  $('body').on('click', '#staff-update', editStaffEvent);
};

export default { staffEvents };
