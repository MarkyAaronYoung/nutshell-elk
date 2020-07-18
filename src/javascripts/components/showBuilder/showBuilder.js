import utils from '../../helpers/utils';
import showData from '../../helpers/data/showData';

const showCardBuilder = () => {
  showData.getShows()
    .then((shows) => {
      let domString = `
                    <div class="text-center">
                      <h2 class="text-center">Upcoming Events</h2>
                      <button class="btn btn-primary auth-button hide text-center" id="add-show">Add New Event</button>
                    </div>
                      <div class="display-flex flex-wrap myShows card-deck">`;
      shows.forEach((show) => {
        domString += `<div class="card text-center show-card" id="${show.id}" style="width: 18rem;">
                        <img class="card-img-top" id="show-image" src="${show.imageUrl}" alt="...">
                        <div class="card-body">
                          <h3 class="card-title">${show.name}</h3>
                          <h4>Event Length: ${show.length}</h4>
                          <p>${show.description}</p>
                          <button class="btn btn-primary auth-button hide" id="update-show">Edit</button>
                          <button class="btn btn-primary auth-button hide" id="delete-show">Delete</button>
                        </div>
                      </div>`;
      });

      domString += '</div>';
      $('#landingPage').addClass('hide');
      utils.printToDom('#shows', domString);
    })
    .catch((err) => console.error(err));
};

export default { showCardBuilder };
