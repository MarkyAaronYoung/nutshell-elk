import utils from '../../helpers/utils';
import eventData from '../../helpers/data/eventData';
import './eventMaker.scss';

const eventPageMaker = () => {
  eventData.getEvents()
    .then((events) => {
      console.warn('event', events);
      let domString = '<h1 class="text-center">Renassaince Fair Events<h1>';
      events.forEach((event) => {
        domString += `
        <div class="details">
        <h2>${event.name}</h2>
        <button class=“btn btn-primary view" id="viewEventDetails">View Event Details</button>
        </div>
      `;
      });
      utils.printToDom('#events-page', domString);
    })
    .catch((err) => console.error(err));
};

export default { eventPageMaker };
