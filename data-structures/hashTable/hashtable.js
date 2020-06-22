'use strict';
const LinkedList = require('./linkedList.js');

class Hashtable {
  constructor() {
    this.hashArr = [];
  }


  hash(key) {
    let hashIndex;
    switch (typeof key) {
    case 'number':
      hashIndex = key * 1234;
      break;
    case 'string':
      hashIndex = this.convertString(key);
      break;
    default:
      hashIndex = 0;
      break;
    }

    return hashIndex;
  }

  convertString(word) {
    let currVal = 0;

    for (let i in word) {
      currVal += word.charCodeAt(i);
    }

    return currVal;
  }

  add(key, val) {
    const hashIndex = this.hash(key);

    if (this.hashArr[hashIndex] === null) {
      this.hashArr[hashIndex] = new LinkedList(key, val);
    } else {
      console.log('collision detected');
      this.hashArr[hashIndex].insert(key, val);
    }

  }

  get(key) {
    const hashIndex = this.hash(key);
    return this.hashArr[hashIndex] === null ? null : this.hashArr[hashIndex].findPair(key).val;
  }

  contains(key) {
    return this.get(key) !== null;
  }
}

module.exports = Hashtable;