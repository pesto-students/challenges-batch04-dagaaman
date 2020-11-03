function dropElements(elements, predicate) {
  const arr = [];
  for (const curr of elements) {
    if (predicate(curr)) {
      arr.push(curr);
    }
  }

  return arr;
}

export { dropElements };
