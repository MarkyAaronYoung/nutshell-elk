import './landingPage.scss';
import utils from '../../helpers/utils';

const addDiv = () => {
  $('#landingPage').removeClass('hide');
};

const removeDiv = () => {
  $('#landingPage').addClass('hide');
};

const buildLandingPage = () => {
  const domString = `
  <h1 class="landingPage">Free-Lancer</h1>
  <h2 class="text-align center">The World's Go-To Authority on Renaissance Faires</h2>
    <div class="landing-container">
    <div class="card grow" style="width: 18rem;">
      <img class="card-img-top" src="https://renfair.com/socal/wp-content/uploads/sites/2/2016/02/ArtichokesfromTheQuailInn.jpg" alt="Renaissance Food">
      <div class="card-body">
        <h5 class="card-title">Food</h5>
        <button class="btn btn-primary view" id="see-foods">View</button>
      </div>
    </div>
    <div class="card grow" style="width: 18rem;">
      <img class="card-img-top" src="https://i.pinimg.com/originals/ed/d4/9e/edd49ed7123a6f7f6a2c5316692aa34e.jpg" alt="Renaissance Souvenirs">
      <div class="card-body">
        <h5 class="card-title">Souvenirs</h5>
        <button class="btn btn-primary view" id="viewSouv">View</button>
      </div>
    </div>
    <div class="card grow" style="width: 18rem;">
      <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCpy9FT2DhSC9yYePu3sL4PYJh88EbNkyAtw&usqp=CAU" alt="Jousting">
      <div class="card-body">
        <h5 class="card-title">Shows</h5>
        <button class="btn btn-primary view" id="viewShows">View</button>
      </div>
    </div>
    <div class="card grow" style="width: 18rem;">
      <img class="card-img-top" src="https://www.eastbaytimes.com/wp-content/uploads/2018/06/fest-renaissance5-0603-04.jpg?w=620" alt="Staff">
      <div class="card-body">
        <h5 class="card-title">Staff</h5>
        <button class="btn btn-primary view" id="viewStaff">View</button>
      </div>
    </div>
    <div class="card grow" style="width: 18rem;">
      <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhnLPrjuZ2ELonB3SQnXvtrIeYNISk7hEX8Q&usqp=CAU">
      <div class="card-body">
        <h5 class="card-title">Events</h5>
        <button class="btn btn-primary view" id="viewEvents">View</button>
      </div>
  </div>
  `;
  utils.printToDom('#landingPage', domString);
};

const hideLanding = () => {
  const domString = '<div class="empty-landing"></div>';
  utils.printToDom('#landingPage', domString);
};

export default {
  addDiv,
  removeDiv,
  buildLandingPage,
  hideLanding,
};
