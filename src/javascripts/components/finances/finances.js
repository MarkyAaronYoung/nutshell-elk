import utils from '../../helpers/utils';
// import eventData from '../../helpers/data/eventData';

const buildFinances = () => {
  const domString = `
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
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </table>
  `;
  utils.printToDom('#finance-page', domString);
};

export default {
  buildFinances,
};
