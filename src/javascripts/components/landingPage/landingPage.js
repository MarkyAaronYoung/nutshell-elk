import './landingPage.scss';
import utils from '../../helpers/utils';
import foodList from '../foodList/foodList';

const addDiv = () => {
  $('#landingPage').removeClass('hide');
};

const removeDiv = () => {
  $('#landingPage').addClass('hide');
};
const buildLandingPage = () => {
  const domString = `
  <h1>Free-Lancer</h1>
    <div class="landing-container">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="https://renfair.com/socal/wp-content/uploads/sites/2/2016/02/ArtichokesfromTheQuailInn.jpg" alt="Renaissance Food">
      <div class="card-body">
        <h5 class="card-title">Food</h5>
        <button class="btn btn-primary" id="see-foods">View</button>
        <button class="btn btn-secondary auth-button">edit</button>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="https://i.pinimg.com/originals/ed/d4/9e/edd49ed7123a6f7f6a2c5316692aa34e.jpg" alt="Renaissance Souvenirs">
      <div class="card-body">
        <h5 class="card-title">Souvenirs</h5>
        <button class="btn btn-primary">View</button>
        <button class="btn btn-secondary auth-button">edit</button>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCpy9FT2DhSC9yYePu3sL4PYJh88EbNkyAtw&usqp=CAU" alt="Jousting">
      <div class="card-body">
        <h5 class="card-title">Shows</h5>
        <button class="btn btn-primary">View</button>
        <button class="btn btn-secondary auth-button">edit</button>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="https://www.eastbaytimes.com/wp-content/uploads/2018/06/fest-renaissance5-0603-04.jpg?w=620" alt="Staff">
      <div class="card-body">
        <h5 class="card-title">Staff</h5>
        <button class="btn btn-primary">View</button>
        <button class="btn btn-secondary auth-button">edit</button>
      </div>
    </div>
  </div>
  `;
  utils.printToDom('#landingPage', domString);
};

const viewEvents = () => {
  $('body').on('click', '#see-foods', foodList.buildFoods);
};

export default {
  addDiv,
  removeDiv,
  buildLandingPage,
  viewEvents,
};
