import axios from 'axios';
import apiKeys from '../apiKeys.json';

// import getFoods from '../data/foodData';
// import getShows from '../data/showData';
// import getSouv from '../data/souvData';
// import getStaff from '../data/staffData'

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getEvents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/events.json`)
    .then((response) => {
      const eventObjects = response.data;
      const events = [];
      if (eventObjects) {
        Object.keys(eventObjects).forEach((eventId) => {
          eventObjects[eventId].id = eventId;
          events.push(eventObjects[eventId]);
        });
      }
      resolve(events);
    })
    .catch((err) => reject(err));
});

export { getEvents };
