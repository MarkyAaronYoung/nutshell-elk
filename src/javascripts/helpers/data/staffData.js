import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getStaff = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/staff.json`)
    .then((response) => {
      const staffObjects = response.data;
      const staff = [];

      if (staffObjects) {
        Object.keys(staffObjects).forEach((staffId) => {
          staffObjects[staffId].id = staffId;
          staff.push(staffObjects[staffId]);
        });
      }

      resolve(staff);
    })
    .catch((err) => reject(err));
});

const getStaffById = (staffId) => axios.get(`${baseUrl}/staff/${staffId}.json`);
const addStaff = (newEmployee) => axios.post(`${baseUrl}/staff.json`, newEmployee);
const deleteStaff = (staffId) => axios.delete(`${baseUrl}/staff/${staffId}.json`);
export default {
  getStaff,
  getStaffById,
  addStaff,
  deleteStaff,
};
