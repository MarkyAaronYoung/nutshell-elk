import eventsData from './eventData';
import foodsData from './foodData';
import staffData from './staffData';
import showData from './showData';
import souvData from './souvData';

const getSingleEventInfo = (eventId) => new Promise((resolve, reject) => {
  eventsData.getEventById(eventId)
    .then((response) => {
      const event = response.data;

      foodsData.getFoodById(event.foodId).then((food) => {
        event.food = food;
      });

      staffData.getStaffById(event.staffId).then((staff) => {
        event.staff = staff;
      });

      showData.getShowById(event.showId).then((show) => {
        event.show = show;
      });

      souvData.getSouvById(event.souvenirId).then((souv) => {
        event.souv = souv;
      });

      resolve(event);
    })
    .catch((err) => reject(err));
});

export default { getSingleEventInfo };
