const souvCardBuilder = (souv) => {
  let domString = '';
  if (souv.isAvailable === true) {
    domString = `
                  <div class="card text-center souv-card" id="${souv.id}" style="width: 18rem;">
                    <img class="card-img-top" id="souv-image" src="${souv.imageUrl}" alt="...">
                    <div class="card-body">
                      <h3 class="card-title">${souv.name}</h3>
                      <h4>$${souv.price}</h4>
                      <p>${souv.description}</p>
                      <button class="btn btn-primary auth-button" id="edit-souv">Edit</button>
                      <button class="btn btn-primary auth-button" id="delete-souv">Delete</button>
                    </div>
                  </div>`;
  } else {
    domString = `
                  <div class="card text-center souv-card notAvail" id="${souv.id}" style="width: 18rem;">
                    <img class="card-img-top" id="souv-image" src="${souv.imageUrl}" alt="...">
                    <div class="card-body">
                      <h3 class="card-title">${souv.name}</h3>
                      <h4>$${souv.price}</h4>
                      <p>${souv.description}</p>
                      <p>SOLD OUT!</P>
                      <button class="btn btn-primary auth-button" id="edit-souv">Edit</button>
                      <button class="btn btn-primary auth-button" id="delete-souv">Delete</button>
                    </div>
                  </div>`;
  }

  return domString;
};

export default { souvCardBuilder };
