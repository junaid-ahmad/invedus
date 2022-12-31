export const deleteAnItemFromArrayUsingId = (array, id) => {
  let index;

  // Trick to get index in for..of loop
  // for (const [i, v] of ["a", "b", "c"].entries()) {
  //   console.log(i, v);
  // }
  for (const [i, contact] of array.entries()) {
    if (id === contact.id) {
      index = i;
      break;
    }
  }

  // deleting one item
  array.splice(index, 1);

  return array;
};
