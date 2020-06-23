'use strict';
const LinkedList = require('./linkedList.js');

class Hashtable {
  constructor() {
    this.hashArr = new Array(1234);
  }


  hash(key) {
    let hashIndex;
    switch (typeof key) {
    case 'number':
      hashIndex = key * 555 % this.hashArr.length;
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
}

module.exports = Hashtable;