import staffData from '../../helpers/data/staffData';
import utils from '../../helpers/utils';

const staffEditForm = (staffId) => {
  $('#new-staff').removeClass('hide');
  staffData.getStaffById(staffId)
    .then((response) => {
      console.error(response);
      const staff = response.data;
      const domString = `
      <h3 class="text-center">Edit Food</h3>
      <form class="modify-staff" id=${staffId}> 
      <div class="form-group">
        <label for="editStaff-name">Name</label>
        <input type="text" class="form-control" id="editStaff-name" value="${staff.name}">
      </div>
      <div class="form-group">
        <label for="editStaff-jobTitle">Job Title</label>
        <input type="text" class="form-control" id="editStaff-jobTitle" value="${staff.jobTitle}">
      </div>
    <div class="form-group">
        <label for="editStaff-imageUrl">Image Url</label>
        <input type="text" class="form-control" id="editStaff-imageUrl" value="${staff.imageUrl}">
      </div>
      <button type="submit" class="btn btn-primary" id="staff-update">Update!</button>
    </form>`;
      utils.printToDom('#new-staff', domString);
    })
    .catch((err) => console.error('cant not get single staff member', err));
};

export default { staffEditForm };
