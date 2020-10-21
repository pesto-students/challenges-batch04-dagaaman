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
  const arr = [1, 1];
  return getFibs(arr, num);
}

function cacheFunction() {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    const result = sumFibs(n);
    cache[n] = result;
    return result;
  };
}

export { sumFibs, cacheFunction };
