import utils from '../../helpers/utils';

const showForm = () => {
  const domString = `
  <form>
  <div class="form-group">
    <label for="addStaff-name">Name</label>
    <input type="text" class="form-control" id="addStaff-name">
  </div>
  <div class="form-group">
    <label for="addStaff-jobTitle">Job Title</label>
    <input type="text" class="form-control" id="addStaff-jobTitle">
  </div>
<div class="form-group">
    <label for="addStaff-imageUrl">Image Url</label>
    <input type="text" class="form-control" id="addStaff-imageUrl">
  </div>
  <button type="submit" class="btn btn-primary" id="staff-adder">Update!</button>
</form>
  `;
  utils.printToDom('#new-staff', domString);
};

export default { showForm };
