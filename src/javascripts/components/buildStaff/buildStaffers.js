import staffData from '../../helpers/data/staffData';
import utils from '../../helpers/utils';

const staffMaker = () => {
  staffData.getStaff()
    .then((staffee) => {
      let domString = `
                          <h2 class="text-center">Staff</h2>
                          <div class="d-flex justify-content-center align-items-center">
                          <button class="btn btn-secondary auth-button" id="add-staff">Add</button>
                          </div>
                          <div class="staff-container">`;
      staffee.forEach((staff) => {
        domString += ` <div class="card" id="${staff.id}" style="width: 18rem;">
        <img class="card-img-top" src="${staff.imageUrl}" alt="${staff.name}">
        <div class="card-body">
          <h5 class="card-title">${staff.name}</h5>
          <h5 class="card-title">${staff.jobTitle}</h5>
          <button class="btn btn-primary auth-button" id="edit-staff"><i class="fas fa-user-edit"></i></button>
          <button class="btn btn-secondary auth-button" id="delete-staff"><i class="fas fa-trash-alt"></i></button>
        </div>
        </div>`;
      });
      domString += '</div>';
      // authData.checkLoginStatus();
      $('#landingPage').addClass('hide');
      utils.printToDom('#staff', domString);
    })
    .catch((err) => console.error(err));
};

export default { staffMaker };
