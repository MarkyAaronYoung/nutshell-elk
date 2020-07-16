const foodMaker = (food) => {
  const domString = `
  <tbody>
    <tr>
      <th scope="row">${food.name}</th>
      <td>$${food.price}</td>
      <td><button type="button" id="edit" class="btn btn-dark hide"><i class="fas fa-user-edit"></i></button></td>
      <td><button type="button" id="delete" class="btn btn-dark hide"><i class="fas fa-trash-alt"></i></button></td>
     <td><div>
     <input type="checkbox" id="food" name="food">
      <label for="food"></label>
      </div></td>
    </tr>
  </tbody>
  `;

  return domString;
};

export default { foodMaker };
