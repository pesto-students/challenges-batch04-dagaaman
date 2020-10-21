function arrTotal(total, num) {
  return total + num;
}

function arrSumOfOdd(total, num) {
  let add = 0;
  if ((num % 2) !== 0) {
    add = num;
  }
  return total + add;
}

function getFibs(arr, maxNum) {
  const sum = arr.slice(Math.max(arr.length - 2, 0)).reduce(arrTotal);
  if (sum <= maxNum) {
    arr.push(sum);
  }

  if (sum >= maxNum) {
    return arr.reduce(arrSumOfOdd);
  }

  return getFibs(arr, maxNum);
}

function sumFibs(num) {
  const arr = [0, 1];
  return getFibs(arr, num);
}

function cacheFunction() {
  const cache = {};
  return (arg) => {
    if (arg in cache) {
      return cache[arg];
    }
    const result = sumFibs(arg);
    cache[arg] = result;
    return result;
  };
}

export { sumFibs, cacheFunction };
