const limitFunctionCallCount = (cb, num) => {
  let curr = 0;
  return (...arg) => {
    if (curr >= num) {
      return null;
    }
    curr += 1;

    return cb(...arg);
  };
};

export {
  limitFunctionCallCount,
};
