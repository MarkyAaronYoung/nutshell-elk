const showCardBuilder = (show) => {
  const domString = `<div class="card text-center show-card" id="${show.id}" style="width: 18rem;">
                      <img class="card-img-top" id="show-image" src="${show.imageUrl}" alt="...">
                      <div class="card-body">
                        <h3 class="card-title">${show.name}</h3>
                        <h4>Event Length: ${show.length}</h4>
                        <p>${show.description}</p>
                        <button class="btn btn-primary auth-button" id="edit-show">Edit</button>
                        <button class="btn btn-primary auth-button" id="delete-show">Delete</button>
                      </div>
                    </div>`;
  return domString;
};

export default { showCardBuilder };
