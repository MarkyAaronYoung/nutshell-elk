import staffData from '../../helpers/data/staffData';
import utils from '../../helpers/utils';
import landingPage from '../landingPage/landingPage';
import './buildStaffers.scss';

const staffMakerAuth = () => {
  staffData.getStaff()
    .then((staffee) => {
      let domString = `
                          <h2 class="text-center staff-header">Staff</h2>
                          <div class="d-flex justify-content-center align-items-center">
                          <button class="btn btn-secondary auth-button" id="add-staff">Add New Staff</button>
                          </div>
                          <div class="staff-container">`;
      staffee.forEach((staff) => {
        domString += ` <div class="card grow" id="${staff.id}" style="width: 18rem;">
        <img class="card-img-top" src="${staff.imageUrl}" alt="${staff.name}">
        <div class="card-body">
          <h5 class="card-title">${staff.name}</h5>
          <h5 class="card-title">${staff.jobTitle}</h5>
          <h5 class="card-title">Price: ${staff.price}</h5>
          <button class="btn btn-primary auth-button " id="edit-staff"><i class="fas fa-user-edit"></i></button>
          <button class="btn btn-primary auth-button " id="delete-staff"><i class="fas fa-trash-alt"></i></button>
        </div>
        </div>`;
      });
      domString += '</div>';
      landingPage.hideLanding();
      utils.printToDom('#staff', domString);
    })
    .catch((err) => console.error(err));
};

const staffMakerNoAuth = () => {
  staffData.getStaff()
    .then((staffee) => {
      let domString = `
                          <h2 class="text-center staff-header">Staff</h2>
                          <div class="d-flex justify-content-center align-items-center">
                          </div>
                          <div class="staff-container">`;
      staffee.forEach((staff) => {
        domString += ` <div class="card grow" id="${staff.id}" style="width: 18rem;">
        <img class="card-img-top" src="${staff.imageUrl}" alt="${staff.name}">
        <div class="card-body">
          <h5 class="card-title">${staff.name}</h5>
          <h5 class="card-title">${staff.jobTitle}</h5>
          <h5 class="card-title">Price: ${staff.price}</h5>
        </div>
        </div>`;
      });
      domString += '</div>';
      landingPage.hideLanding();
      utils.printToDom('#staff', domString);
    })
    .catch((err) => console.error(err));
};

export default { staffMakerAuth, staffMakerNoAuth };
