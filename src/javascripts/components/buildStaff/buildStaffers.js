const staffMaker = (staff) => {
  const domString = ` <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${staff.imageUrl}" alt="${staff.name}">
  <div class="card-body">
    <h5 class="card-title">${staff.name}</h5>
    <h5 class="card-title">${staff.jobTitle}</h5>
    <button class="btn btn-primary auth-button" id="edit-staff">Edit</button>
    <button class="btn btn-secondary auth-button" id="add-staff">update</button>
  </div>
  </div>`;
  return domString;
};

export default { staffMaker };
