import foodsData from './foodData';
import staffData from './staffData';
import showData from './showData';
import souvData from './souvData';
import eventsData from './eventData';
import eventFoodData from './eventFoodData';

const getSingleEventInfo = (eventId) => new Promise((resolve, reject) => {
  eventsData.getEventById(eventId)
    .then((response) => {
      const event = response.data;

      foodsData.getFoodById(event.foodId).then((food) => {
        event.food = food.data;
<<<<<<< Updated upstream
        staffData.getStaffById(event.staffId).then((staff) => {
          event.staff = staff.data;
          showData.getShowById(event.showId).then((show) => {
            event.show = show.data;
            souvData.getSouvById(event.souvenirId).then((souv) => {
              event.souv = souv.data;
=======

        staffData.getStaffById(event.staffId).then((staff) => {
          event.staff = staff.data;

          showData.getShowById(event.showId).then((show) => {
            event.show = show.data;

            souvData.getSouvById(event.souvenirId).then((souvenir) => {
              event.souv = souvenir.data;

>>>>>>> Stashed changes
              resolve(event);
            });
          });
        });
      });
<<<<<<< Updated upstream
=======
    })
    .catch((err) => reject(err));
});

const getEventFoodInfo = (eventId) => new Promise((resolve, reject) => {
  eventsData.getEventById(eventId)
    .then((response) => {
      const event = response.data;

      foodsData.getFoods().then((allFoods) => {
        eventFoodData.getEventFoods().then((allEventFoods) => {
          event.foods = [];
          const eventFoods = allEventFoods.filter((foodItem) => foodItem.eventId === eventId);
          console.warn(eventFoods);
          allFoods.forEach((singleFood) => {
            const food = { ...singleFood };
            event.foods.push(food);
          });
        });
      });
      resolve(event.foods);
>>>>>>> Stashed changes
    })
    .catch((err) => reject(err));
});

export default {
  getSingleEventInfo,
  getEventFoodInfo,
};
