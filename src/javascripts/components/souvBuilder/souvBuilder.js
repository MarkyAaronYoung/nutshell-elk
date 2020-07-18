import utils from '../../helpers/utils';
import souvData from '../../helpers/data/souvData';

const souvCardBuilder = () => {
  let domString = '';
  souvData.getSouv()
    .then((souvs) => {
      domString += `
                    <div class="text-center">
                      <h2 class="text-center">Souvenirs</h2>
                      <button class="btn btn-primary auth-button hide text-center" id="add-souv">Add New Souvenir</button>
                    </div>
                    <div class="display-flex flex-wrap mySouvenirs card-deck">`;
      souvs.forEach((souv) => {
        if (souv.isAvailable === true) {
          domString += `
                        <div class="card text-center souv-card" id="${souv.id}" style="width: 18rem;">
                          <img class="card-img-top" id="souv-image" src="${souv.imageUrl}" alt="...">
                          <div class="card-body">
                            <h3 class="card-title">${souv.name}</h3>
                            <h4>$${souv.price}</h4>
                            <p>${souv.description}</p>
                            <button class="btn btn-primary auth-button hide" id="update-souv">Edit</button>
                            <button class="btn btn-primary auth-button hide" id="delete-souv">Delete</button>
                          </div>
                        </div>`;
        } else {
          domString += `
                        <div class="card text-center souv-card notAvail" id="${souv.id}" style="width: 18rem;">
                          <img class="card-img-top" id="souv-image" src="${souv.imageUrl}" alt="...">
                          <div class="card-body">
                            <h3 class="card-title">${souv.name}</h3>
                            <h4>$${souv.price}</h4>
                            <p>${souv.description}</p>
                            <p>SOLD OUT!</P>
                            <button class="btn btn-primary auth-button hide" id="update-souv">Edit</button>
                            <button class="btn btn-primary auth-button hide" id="delete-souv">Delete</button>
                          </div>
                        </div>`;
        }
      });

      domString += '</div>';
      $('#landingPage').addClass('hide');
      utils.printToDom('#souvenirs', domString);
    })
    .catch((err) => console.error(err));
};

export default { souvCardBuilder };
