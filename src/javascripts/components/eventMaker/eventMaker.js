import utils from '../../helpers/utils';
import eventData from '../../helpers/data/eventData';
import './eventMaker.scss';

const eventPageMaker = () => {
  eventData.getEvents()
    .then((events) => {
      console.warn('event', events);
      let domString = '';
      events.forEach((event) => {
        domString += `
        <h1>${event.name}</h1>
        <div class="col-3">
          <div class="card border-0 rounded-0 bg-dark text-light" id=${event.foodId}>
          <div class="card-header text-center">${event.staffId}</div>
        </div> 
        <div class="col-3">
        <div class="card border-0 rounded-0 bg-dark text-light" id=${event.souvenirId}>
          <div class="card-header text-center">${event.showId}</div>
        </div>  
      `;
      });
      utils.printToDom('#events-page', domString);
    })
    .catch((err) => console.error(err));
};

export default { eventPageMaker };
