import utils from '../../helpers/utils';
import souvData from '../../helpers/data/souvData';
import landingPage from '../landingPage/landingPage';

import './souvBuilder.scss';

const souvCardBuilder = () => {
  let domString = '';
  souvData.getSouv()
    .then((souvs) => {
      domString += `
                    <div class="text-center">
                      <h2 class="text-center">Souvenirs</h2>
                      <button class="btn btn-primary auth-button text-center" id="add-souv">Add New Souvenir</button>
                    </div>
                    <div class="souv-container mySouvenirs">`;
      souvs.forEach((souv) => {
        if (souv.isAvailable === true) {
          domString += `
                        <div class="card text-center souv-card grow" id="${souv.id}" style="width: 18rem;">
                          <img class="card-img-top" id="souv-image" src="${souv.imageUrl}" alt="...">
                          <div class="card-body">
                            <h3 class="card-title">${souv.name}</h3>
                            <h4>$${souv.price}</h4>
                            <p>${souv.description}</p>
                            <button class="btn btn-primary auth-button" id="update-souv">Edit</button>
                            <button class="btn btn-primary auth-button" id="delete-souv">Delete</button>
                          </div>
                        </div>`;
        } else {
          domString += `
                        <div class="card text-center souv-card notAvail grow" id="${souv.id}" style="width: 18rem;">
                          <img class="card-img-top" id="souv-image" src="${souv.imageUrl}" alt="...">
                          <div class="card-body">
                            <h3 class="card-title">${souv.name}</h3>
                            <h4>$${souv.price}</h4>
                            <p>${souv.description}</p>
                            <p>SOLD OUT!</P>
                            <button class="btn btn-primary auth-button" id="update-souv">Edit</button>
                            <button class="btn btn-primary auth-button" id="delete-souv">Delete</button>
                          </div>
                        </div>`;
        }
      });

      domString += '</div>';
      landingPage.hideLanding();
      utils.printToDom('#souvenirs', domString);
    })
    .catch((err) => console.error(err));
};

const noAuthSouvCardBuilder = () => {
  let domString = '';
  souvData.getSouv()
    .then((souvs) => {
      domString += `
                    <div class="text-center">
                      <h2 class="text-center">Souvenirs</h2>
                    </div>
                    <div class="souv-container mySouvenirs">`;
      souvs.forEach((souv) => {
        if (souv.isAvailable === true) {
          domString += `
                        <div class="card text-center souv-card grow" id="${souv.id}" style="width: 18rem;">
                          <img class="card-img-top" id="souv-image" src="${souv.imageUrl}" alt="...">
                          <div class="card-body">
                            <h3 class="card-title">${souv.name}</h3>
                            <h4>$${souv.price}</h4>
                            <p>${souv.description}</p>
                          </div>
                        </div>`;
        } else {
          domString += `
                        <div class="card text-center souv-card notAvail grow" id="${souv.id}" style="width: 18rem;">
                          <img class="card-img-top" id="souv-image" src="${souv.imageUrl}" alt="...">
                          <div class="card-body">
                            <h3 class="card-title">${souv.name}</h3>
                            <h4>$${souv.price}</h4>
                            <p>${souv.description}</p>
                            <p>SOLD OUT!</P>
                          </div>
                        </div>`;
        }
      });

      domString += '</div>';
      landingPage.hideLanding();
      utils.printToDom('#souvenirs', domString);
    })
    .catch((err) => console.error(err));
};

export default { souvCardBuilder, noAuthSouvCardBuilder };
