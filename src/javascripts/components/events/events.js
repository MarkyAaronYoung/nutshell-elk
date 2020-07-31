const buildEvents = (event) => {
  const domString = `
                      <div id=${event.id} class="card text-center event-card grow" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${event.name}</h5>
                          <button id="viewIndividualEvent" class="btn btn-primary view">View Event Details</button>
                        </div>
                      </div>`;
  return domString;
};

export default { buildEvents };
