import showData from '../../helpers/data/showData';
import showBuilder from '../showBuilder/showBuilder';
import utils from '../../helpers/utils';

const showViewer = (e) => {
  e.preventDefault();
  console.error(e);
  $('#shows').removeClass('hide');
  showData.getShows()
    .then((shows) => {
      let domString = `
                    <div class="text-center">
                      <h2 class="text-center">Upcoming Events</h2>
                      <button class="btn btn-primary auth-button text-center" id="add-show">Add New Event</button>
                    </div>
                      <div class="display-flex flex-wrap myShows card-deck">`;
      shows.forEach((show) => {
        domString += showBuilder.showCardBuilder(show);
      });

      domString += '</div>';
      console.error(domString);
      utils.printToDom('#shows', domString);
    })
    .catch((err) => console.error(err));
};

const showEvents = () => {
  $('body').one('click', '#viewShows', showViewer);
};

export default { showEvents };
