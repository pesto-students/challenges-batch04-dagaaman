const sumEvenArgs = (...args) => {
  let sum = 0;
  args.forEach((curr, i) => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(curr) === true) {
      throw new Error(`Error: Argument(s) not as number. Argument: ${curr} on index ${i}`);
    }
    if (curr % 2 === 0) {
      sum += curr;
    }
  });
  return sum;
};

export { sumEvenArgs };
