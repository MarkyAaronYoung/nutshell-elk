import utils from '../../helpers/utils';
import eventData from '../../helpers/data/eventData';

import eventsComponent from '../events/events';
import landingPage from '../landingPage/landingPage';

import './eventMaker.scss';

const eventPageMaker = () => {
  eventData.getEvents()
    .then((events) => {
      let domString = ` <div class="text-center">
                          <h2 class="text-center">Renassaince Fair Events</h2>
                          <button class="btn btn-primary text-center" id="add-event">Add New Event</button>
                        </div>
                        <div class="event-container myEvents">`;

      events.forEach((event) => {
        domString += eventsComponent.buildEvents(event);
      });

      domString += '</div>';
      landingPage.hideLanding();
      utils.printToDom('#events-page', domString);
    })
    .catch((err) => console.error(err));
};

export default { eventPageMaker };
