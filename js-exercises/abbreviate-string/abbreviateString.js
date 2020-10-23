// import { isString } from "util";

function abbreviateString(str) {
  const strArray = str.split(' ').filter((curr) => {
    if (curr.length) {
      return true;
    }

    return false;
  });
  if (strArray.length < 2) {
    return str;
  }

  return `${strArray[0]} ${strArray[strArray.length - 1][0].toUpperCase()}.`;
}

export { abbreviateString };
