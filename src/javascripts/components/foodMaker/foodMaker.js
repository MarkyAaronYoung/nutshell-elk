const foodMakerAuth = (food) => {
  const domString = `
  <tbody>
    <tr>
      <th scope="row">${food.name}</th>
      <td>$${food.price}</td>
      <td><button type="button" id="edit" class="btn btn-dark"><i class="fas fa-user-edit"></i></button></td>
      <td><button type="button" id="delete" class="btn btn-dark"><i class="fas fa-trash-alt"></i></button></td>
     <td><div>
     <input type="checkbox" id="food" ${food.isAvailable ? 'checked' : ''} name="food">
      <label for="food"></label>
      </div></td>
    </tr>
  </tbody>
  `;

  return domString;
};

const foodMakerNoAuth = (food) => {
  const domString = `
  <tbody>
    <tr>
      <th scope="row">${food.name}</th>
      <td>$${food.price}</td>
    </tr>
  </tbody>
  `;

  return domString;
};

export default { foodMakerAuth, foodMakerNoAuth };
