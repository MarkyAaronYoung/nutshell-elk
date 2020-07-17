import souvData from '../../helpers/data/souvData';
import utils from '../../helpers/utils';
import souvBuilder from '../souvBuilder/souvBuilder';
import addSouv from '../addSouv/addSouv';

import './souvList.scss';

const newSouvEvent = (e) => {
  e.preventDefault();
  console.error(e);
  const newSouvObj = {
    name: $('#addSouv-name').val(),
    price: $('#addSouv-price').val(),
    description: $('#addSouv-description').val(),
    imageUrl: $('#addSouv-imageUrl').val(),
    isAvailable: true,
  };
  souvData.addSouv(newSouvObj)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      updatedSouvViewer();
      utils.printToDom('#new-souv', '');
    })
    .catch((err) => console.error(err));
};

const souvViewer = (e) => {
  e.preventDefault();
  $('#souvenirs').removeClass('hide');
  souvData.getSouv()
    .then((souvs) => {
      let domString = `
                    <div class="text-center">
                      <h2 class="text-center">Souvenirs</h2>
                      <button class="btn btn-primary auth-button text-center" id="add-souv">Add New Souvenir</button>
                    </div>
                      <div class="display-flex flex-wrap mySouvenirs card-deck">`;
      souvs.forEach((souv) => {
        domString += souvBuilder.souvCardBuilder(souv);
      });

      domString += '</div>';
      $('#landingPage').addClass('hide');
      utils.printToDom('#souvenirs', domString);
    })
    .catch((err) => console.error(err));
};

const updatedSouvViewer = () => {
  $('#souvenirs').removeClass('hide');
  souvData.getSouv()
    .then((souvs) => {
      let domString = `
                    <div class="text-center">
                      <h2 class="text-center">Souvenirs</h2>
                      <button class="btn btn-primary auth-button text-center" id="add-souv">Add New Souvenir</button>
                    </div>
                      <div class="display-flex flex-wrap mySouvenirs card-deck">`;
      souvs.forEach((souv) => {
        domString += souvBuilder.souvCardBuilder(souv);
      });

      domString += '</div>';
      $('#landingPage').addClass('hide');
      utils.printToDom('#souvenirs', domString);
    })
    .catch((err) => console.error(err));
};

const souvEvents = () => {
  $('body').one('click', '#viewSouv', souvViewer);
  $('body').one('click', '#add-souv', addSouv.addSouvForm);
  $('body').one('click', '#souv-adder', newSouvEvent);
};

export default { souvEvents };
