// import utils from '../../helpers/utils';
import souvData from '../../helpers/data/souvData';
import utils from '../../helpers/utils';

import './souvList.scss';

const souvBuilder = (e) => {
  e.preventDefault();
  $('#souvenirs').removeClass('hide');
  souvData.getSouv()
    .then((souvs) => {
      let domString = `
                      <h2 class="text-center">souvenirs</h2>
                      <div class="display-flex flex-wrap mySouvenirs card-deck">`;
      souvs.forEach((souv) => {
        if (souv.isAvailable === true) {
          domString += `
                        <div class="card text-center souv-card" id="${souv.id}" style="width: 18rem;">
                          <img class="card-img-top" id="souv-image" src="${souv.imageUrl}" alt="...">
                          <div class="card-body">
                            <h3 class="card-title">${souv.name}</h3>
                            <h4>${souv.price}</h4>
                            <p>${souv.description}</p>
                            <button class="btn btn-primary auth-button" id="edit-souv">Edit</button>
                            <button class="btn btn-secondary auth-button" id="add-souv">Add</button>
                          </div>
                        </div>`;
        }
      });
      domString += '</div>';
      utils.printToDom('#souvenirs', domString);
    })
    .catch((err) => console.error(err));
};

const souvEvents = () => {
  $('body').one('click', '#viewSouv', souvBuilder);
};

export default { souvEvents };
