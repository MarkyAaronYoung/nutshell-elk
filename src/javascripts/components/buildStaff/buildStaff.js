import staffData from '../../helpers/data/staffData';
import utils from '../../helpers/utils';
// import authData from '../../helpers/data/authData';
import showForm from '../addStaff/addStaff';
import staffBuilder from './buildStaffers';
import './buildStaff.scss';

const staffBuilders = (e) => {
  e.preventDefault();
  $('#staff').removeClass('hide');
  staffBuilder.staffMaker();
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
      staffBuilder.staffMaker();
      utils.printToDom('#new-staff', '');
    })
    .catch((err) => console.error('cant add staff', err));
};

const staffEvents = () => {
  $('body').one('click', '#viewStaff', staffBuilders);
  $('body').one('click', '#add-staff', showForm.showForm);
  $('body').on('click', '#staff-adder', buildNewStaff);
  $('#components').removeClass('hide');
};

export default { staffEvents };
