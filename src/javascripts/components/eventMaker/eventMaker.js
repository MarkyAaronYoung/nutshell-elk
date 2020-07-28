import utils from '../../helpers/util';
import eventData from '../../helpers/data/eventData';
import './eventMaker.scss';

const eventPageMaker = (events) => {
  const domString = `
  <h1>${events.name}</h1>
  <div class="col-3">
    <div class="card border-0 rounded-0 bg-dark text-light" id=${events.foodId}>
    <div class="card-header text-center">${events.staffId}</div>
  </div> 
  <div class="col-3">
  <div class="card border-0 rounded-0 bg-dark text-light" id=${events.souvenirId}>
    <div class="card-header text-center">${events.showId}</div>
  </div>  
`;

return domString;
}

export default { eventPageMaker }
