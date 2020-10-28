function uniqueElements(arr1, arr2) {
  const arr = [];
  arr1.forEach(curr1 => {
    let isPresent = false;
    for (const curr2 of arr2) {
      if (curr1 === curr2) {
        isPresent = true;
        break;
      }
    }
    if (!isPresent) {
      arr.push(curr1);
    }
  });

  return arr;
}

function diffArray(arr1, arr2) {
  const newArr1 = uniqueElements(arr1, arr2);
  const newArr2 = uniqueElements(arr2, arr1);

  return newArr1.concat(newArr2);
}

export {
  diffArray,
};
