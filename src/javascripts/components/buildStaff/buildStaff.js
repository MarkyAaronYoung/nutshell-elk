import staffData from '../../helpers/data/staffData';
import utils from '../../helpers/utils';
// eslint-disable-next-line import/no-cycle
import authData from '../../helpers/data/authData';
import showForm from '../addStaff/addStaff';
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
                          <div class="staff-container"> 
                          
      `;
      staffee.forEach((staff) => {
        domString += `
               
               <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${staff.imageUrl}" alt="${staff.name}">
                <div class="card-body">
                  <h5 class="card-title">${staff.name}</h5>
                  <h5 class="card-title">${staff.jobTitle}</h5>
                  <button class="btn btn-primary auth-button" id="edit-staff">Edit</button>
                  <button class="btn btn-secondary auth-button" id="add-staff">Add</button>
                </div>
                </div>
              `;
      });
      domString += '</div><div id="new-staff"></div>';
      authData.checkLoginStatus();
      $('#landingPage').addClass('hide');
      utils.printToDom('#staff', domString);
    })
    .catch((err) => console.error(err));
};

const staffEvents = () => {
  $('body').one('click', '#viewStaff', staffBuilder);
  $('body').one('click', '#add-staff', showForm.showForm);
  $('#components').removeClass('hide');
};

export default { staffEvents };
