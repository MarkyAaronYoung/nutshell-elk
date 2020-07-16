const foodMaker = (food) => {
  const domString = `
  <tbody>
    <tr>
      <th scope="row">${food.imageUrl}</th>
      <td>${food.name}</td>
      <td>$${food.price}</td>
      <td><button type="button" class="btn btn-dark"><i class="fas fa-user-edit"></i></button></td>
      <td><button type="button" class="btn btn-dark"><i class="fas fa-trash-alt"></i></button></td>
     <td><div>
     <input type="checkbox" id="food" name="food">
      <label for="food"></label>
      </div></td>
    </tr>
  </tbody>
</table>
  `;

  return domString;
};

export default { foodMaker };
