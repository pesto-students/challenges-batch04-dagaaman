function getCloneObj(obj) {
  let val;
  if (obj) {
    switch (typeof obj) {
      case 'object':
        val = {};
        for (const curr of Object.keys(obj)) {
          // eslint-disable-next-line no-unused-vars
          val[curr] = getCloneObj(obj[curr]);
        }
        break;
      default: val = obj;
    }
  } else {
    val = obj;
  }
  return val;
}

function deepCopyObject(objToCopy) {
  return getCloneObj(objToCopy);
}

export { deepCopyObject };
