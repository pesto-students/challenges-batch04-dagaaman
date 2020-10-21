function duplicateLetters(args) {
  const charArray = args.split('');
  const keys = {};
  charArray.forEach(character => {
    if (keys[character]) {
      // eslint-disable-next-line no-plusplus
      keys[character]++;
    } else {
      keys[character] = 1;
    }
  });

  let max = 1;

  Object.keys(keys).forEach(char => {
    if (keys[char] > max) {
      max = keys[char];
    }
  });

  return (max === 1) ? false : max;
}

export {
  duplicateLetters,
};
