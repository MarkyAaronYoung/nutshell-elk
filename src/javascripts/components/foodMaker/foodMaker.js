const foodMaker = (food) => {
  const domString = `
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Food</th>
      <th scope="col">Price</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
     <th scope="col">Is Available?</th>
    </tr>
  </thead>
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
