'use strict';

const leftJoin = (leftHash, rightHash) => {
  const leftKeys = leftHash.keys();
  const res = new Array(leftKeys.length);

  for (let i = 0; i < leftKeys.length; i++) {
    const key = leftKeys[i];
    const valLeft = leftHash.get(key);
    const valRight = rightHash.get(key);
    res[i] = [key, valLeft, valRight];
  }

  return res;
};

module.exports = leftJoin;
