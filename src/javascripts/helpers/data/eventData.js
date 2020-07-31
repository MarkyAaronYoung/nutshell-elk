import axios from 'axios';
import apiKeys from '../apiKeys.json';

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

const getEventById = (eventId) => axios.get(`${baseUrl}/events/${eventId}.json`);
const addEvent = (newEventObj) => axios.post(`${baseUrl}/events.json`, newEventObj);

export default { getEvents, addEvent, getEventById };
