function removeFalsyValues(array) {
  return array.filter(curr => {
    if (curr) {
      return true;
    }
    return false;
  });
}

export {
  removeFalsyValues,
};
