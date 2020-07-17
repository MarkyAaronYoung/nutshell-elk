import souvData from '../../helpers/data/souvData';
import utils from '../../helpers/utils';
import souvBuilder from '../souvBuilder/souvBuilder';

import './souvList.scss';

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
      utils.printToDom('#souvenirs', domString);
    })
    .catch((err) => console.error(err));
};

const souvEvents = () => {
  $('body').one('click', '#viewSouv', souvViewer);
};

export default { souvEvents };
