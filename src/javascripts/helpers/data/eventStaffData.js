import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getEventStaff = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventStaff.json`)
    .then((response) => {
      const eventStaffObjects = response.data;
      const eventStaff = [];
      Object.keys(eventStaffObjects).forEach((eventStaffId) => {
        eventStaffObjects[eventStaffId].id = eventStaffId;
        eventStaff.push(eventStaffObjects[eventStaffId]);
      });
      resolve(eventStaff);
    })
    .catch((err) => reject(err));
});

const getEventStaffById = (eventStaffId) => axios.get(`${baseUrl}/eventStaff/${eventStaffId}.json`);

export default {
  getEventStaff,
  getEventStaffById,
};
