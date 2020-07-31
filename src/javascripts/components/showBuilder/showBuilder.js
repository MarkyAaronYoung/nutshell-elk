import utils from '../../helpers/utils';
import showData from '../../helpers/data/showData';

import landingPage from '../landingPage/landingPage';

import './showBuilder.scss';

const showCardBuilder = () => {
  showData.getShows()
    .then((shows) => {
      let domString = `
                    <div class="text-center">
                      <h2 class="text-center">Upcoming Shows</h2>
                      <button class="btn btn-primary auth-button text-center" id="add-show">Add New Show</button>
                    </div>
                      <div class="shows-container myShows">`;
      shows.forEach((show) => {
        domString += `<div class="card text-center show-card grow" id="${show.id}" style="width: 18rem;">
                        <img class="card-img-top" id="show-image" src="${show.imageUrl}" alt="...">
                        <div class="card-body">
                          <h3 class="card-title">${show.name}</h3>
                          <h4>Event Length: ${show.length}</h4>
                          <h4>Event Price: ${show.price}</h4>
                          <p>${show.description}</p>
                          <button class="btn btn-primary auth-button" id="update-show"><i class="fas fa-user-edit"></i></button>
                          <button class="btn btn-primary auth-button" id="delete-show"><i class="fas fa-trash-alt"></i></button>
                        </div>
                      </div>`;
      });

      domString += '</div>';
      landingPage.hideLanding();
      utils.printToDom('#shows', domString);
    })
    .catch((err) => console.error(err));
};

const noAuthShowCardBuilder = () => {
  showData.getShows()
    .then((shows) => {
      let domString = `
                    <div class="text-center">
                      <h2 class="text-center">Upcoming Shows</h2>
                    </div>
                      <div class="shows-container myShows">`;
      shows.forEach((show) => {
        domString += `<div class="card text-center show-card grow" id="${show.id}" style="width: 18rem;">
                        <img class="card-img-top" id="show-image" src="${show.imageUrl}" alt="...">
                        <div class="card-body">
                          <h3 class="card-title">${show.name}</h3>
                          <h4>Event Length: ${show.length}</h4>
                          <h4>Event Price: ${show.price}</h4>
                          <p>${show.description}</p>
                        </div>
                      </div>`;
      });

      domString += '</div>';
      landingPage.hideLanding();
      utils.printToDom('#shows', domString);
    })
    .catch((err) => console.error(err));
};
export default { showCardBuilder, noAuthShowCardBuilder };
