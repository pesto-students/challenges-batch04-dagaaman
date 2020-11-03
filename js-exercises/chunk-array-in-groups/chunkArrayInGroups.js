function chunkArrayInGroups(array, chunkSize) {
  let curr = 0;
  let arr = [];
  const arr2d = [];

  for (const currVal of array) {
    arr.push(currVal);
    curr += 1;
    if (curr === chunkSize) {
      arr2d.push(arr);
      curr = 0;
      arr = [];
    }
  }

  if (arr.length) {
    arr2d.push(arr);
  }

  return arr2d;
}

export {
  chunkArrayInGroups,
};
