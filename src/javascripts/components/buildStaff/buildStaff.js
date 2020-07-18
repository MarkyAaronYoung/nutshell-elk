import staffData from '../../helpers/data/staffData';
import utils from '../../helpers/utils';
// import authData from '../../helpers/data/authData';
import showForm from '../addStaff/addStaff';
import staffComponent from './buildStaffers';
import './buildStaff.scss';

const staffBuilder = (e) => {
  e.preventDefault();
  $('#staff').removeClass('hide');
  staffData.getStaff()
    .then((staffee) => {
      let domString = `
                          <h2 class="text-center">Staff</h2>
                          <div class="d-flex justify-content-center align-items-center">
                          <button class="btn btn-secondary auth-button" id="add-staff">Add</button>
                          </div>
                          <div class="staff-container">`;
      staffee.forEach((staff) => {
        domString += staffComponent.staffMaker(staff);
      });
      domString += '</div><div id="new-staff"></div>';
      // authData.checkLoginStatus();
      $('#landingPage').addClass('hide');
      utils.printToDom('#staff', domString);
    })
    .catch((err) => console.error(err));
};
const buildNewStaff = (e) => {
  e.preventDefault();
  const brandNewStaff = {
    name: $('#addStaff-name').val(),
    jobTitle: $('#addStaff-jobTitle').val(),
    imageUrl: $('#addStaff-imageUrl').val(),
  };
  console.warn(brandNewStaff);
  staffData.addStaff(brandNewStaff)
    .then(() => {
      staffComponent.staffMaker();
      utils.printToDom('#new-staff', '');
    })
    .catch((err) => console.error('cant add staff', err));
};

const staffEvents = () => {
  $('body').one('click', '#viewStaff', staffBuilder);
  $('body').one('click', '#add-staff', showForm.showForm);
  $('body').on('click', '#staff-adder', buildNewStaff);
  $('#components').removeClass('hide');
};

export default { staffEvents };
