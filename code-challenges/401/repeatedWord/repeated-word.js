'use strict';
const Hashtable = require('../../../data-structures/hashTable/hashtable.js');

const repeatedWord = (input) => {
  if (!input) {
    return null;
  }

  /* eslint-disable quotes */
  const splitTable = new Hashtable(50);
  splitTable.add('.', 'yes');
  splitTable.add('!', 'yes');
  splitTable.add('?', 'yes');
  splitTable.add('/', 'yes');
  splitTable.add('"', 'yes');
  splitTable.add("'", 'yes');
  splitTable.add(' ', 'yes');
  splitTable.add(',', 'yes');
  /* eslint-enable quotes */

  const hTable = new Hashtable(555);

  let currWord = '';

  for (const c of input) {
    if (splitTable.contains(c)) {
      if (hTable.get(currWord)) {
        return currWord;
      }

      if (currWord) {
        hTable.add(currWord.toLowerCase(), 1);
        currWord = '';
      }
    } else {
      currWord += c;
    }
  }

  return null;
};

module.exports = repeatedWord;
