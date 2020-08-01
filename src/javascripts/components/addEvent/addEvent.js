import utils from '../../helpers/utils';

import './addEvent.scss';

const addNewEventForm = (e) => {
  e.preventDefault();
  $('#new-event').removeClass('hide');
  const domString = ` <form>
                        <div class="form-group">
                          <label for="addEvent-name">Event Name</label>
                          <input type="text" class="form-control" id="addEvent-name">
                        </div>
                        <button type="submit" class="btn btn-primary" id="event-adder">Add Event</button>
                      </form>`;
  utils.printToDom('#new-event', domString);
};

export default { addNewEventForm };
