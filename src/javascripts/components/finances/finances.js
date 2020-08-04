import utils from '../../helpers/utils';
import smash from '../../helpers/data/smash';
import './finances.scss';

const buildFinances = (eventId) => {
  smash.getSingleEventInfo(eventId)
    .then((event) => {
      const totalPrice = event.food.price + event.staff.price + event.show.price + event.souv.price;
      const domString = `
        <div class="finance-container">
        <table class='table table-bordered'>
        <thead class ="colored">
          <tr>
            <th>Food</th>
            <th>Staff</th>
            <th>Show</th>
            <th>Souvenirs</th>
            <th>Total</th>
          </tr>
          </thead>
          <tr>
            <td>${event.food.price}</td>
            <td>${event.staff.price}</td>
            <td>${event.show.price}</td>
            <td>${event.souv.price}</td>
            <td>${totalPrice}</td>
          </tr>
          </table>
          </div>
  `;
      utils.printToDom('#finance-page', domString);
    })
    .catch((err) => console.error(err));
};

export default {
  buildFinances,
};
