import staffData from '../../helpers/data/staffData';
import utils from '../../helpers/utils';
// eslint-disable-next-line import/no-cycle
import authData from '../../helpers/data/authData';
import './buildStaff.scss';

const staffBuilder = (e) => {
  e.preventDefault();
  $('#staff').removeClass('hide');
  staffData.getStaff()
    .then((staffee) => {
      let domString = `
                          <h2 class="text-center">Staff</h2>
                          <div class="d-flex justify-content-center align-items-center">
                          <button class="btn btn-dark" id="home">home</button>
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
                  <button class="btn btn-primary auth-button" id="edit-souv">Edit</button>
                  <button class="btn btn-secondary auth-button" id="add-souv">Add</button>
                </div>
                </div>
              `;
      });
      domString += '</div>';
      authData.checkLoginStatus();
      utils.printToDom('#staff', domString);
    })
    .catch((err) => console.error(err));
};

const staffEvents = () => {
  $('body').one('click', '#viewStaff', staffBuilder);
  $('#components').removeClass('hide');
  // $('#landingPage').addClass('hide');
};

export default { staffEvents };
