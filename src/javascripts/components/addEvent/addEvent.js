import utils from '../../helpers/utils';

<<<<<<< HEAD
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
=======
const addNewEventForm = (e) => {
  e.preventDefault();
  $('#new-event').removeClass('hide');
  const domString = `<form>
      <div class="form-group">
        <label for="addEvent-name">Event Name</label>
        <input type="text" class="form-control" id="addEvent-name">
      </div>
    <button type="submit" class="btn btn-light" id="event-adder">Update!</button>
    </form>`;
  utils.printToDom('#add-event', domString);
>>>>>>> 48bccd2904ec3f1ce97b959159e6231429102dff
};

export default { addNewEventForm };
