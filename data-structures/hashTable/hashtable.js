'use strict';
const LinkedList = require('./linkedList.js');

class Hashtable {
  constructor(length) {
    this.hashArr =
      length === undefined
        ? new Array((1234 * Math.random()) >>> 1)
        : new Array(length);
    this.keyArr = [];
  }

  hash(key) {
    let hashIndex;
    /* eslint-disable indent */
    switch (typeof key) {
      case 'number':
        hashIndex = (key * 555) % this.hashArr.length;
        break;
      case 'string':
        hashIndex = this.convertString(key);
        break;
      default:
        hashIndex = 0;
        if (Array.isArray(key)) {
          hashIndex = key.length % this.hashArr.length;
        }

        if (this.hashArr[hashIndex] === undefined) {
          this.hashArr[hashIndex] = new LinkedList();
        }
        break;
    }
    /* eslint-enable indent */
    return hashIndex;
  }

  convertString(word) {
    let currVal = 0;

    for (let i in word) {
      currVal += word.charCodeAt(i);
    }

    return currVal % this.hashArr.length;
  }

  add(key, val) {
    const hashIndex = this.hash(key);
    this.keyArr.push(key);
    if (this.hashArr[hashIndex]) {
      this.hashArr[hashIndex].append(key, val);
    } else {
      this.hashArr[hashIndex] = new LinkedList(key, val);
    }
  }

  get(key) {
    const hashIndex = this.hash(key);
    if (this.hashArr[hashIndex] === undefined) {
      return null;
    } else {
      const pair = this.hashArr[hashIndex].findPair(key);
      return pair ? pair.val : null;
    }
  }

  contains(key) {
    return this.get(key) !== null;
  }

  keys() {
    return this.keyArr;
  }
}

module.exports = Hashtable;
