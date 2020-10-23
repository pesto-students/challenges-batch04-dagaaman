function rot13(cyper) {
  const lowerAlpha = 'A'.charCodeAt();
  const upperAlpha = 'Z'.charCodeAt();
  let str = '';
  for (const char of cyper) {
    // if ((/[A-Z]/).test(char)) {
    //   str += char;
    // }
    const charVal = char.charCodeAt();
    if (charVal >= lowerAlpha && charVal <= upperAlpha) {
      let curr = charVal - 13;
      if (curr < lowerAlpha) {
        curr += (upperAlpha - lowerAlpha + 1);
      }
      str += String.fromCharCode(curr);
    } else {
      str += char;
    }
  }

  return str;
}

export {
  rot13,
};
