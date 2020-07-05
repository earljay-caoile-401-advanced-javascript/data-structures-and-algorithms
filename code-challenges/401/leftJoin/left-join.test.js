const leftJoin = require('./left-join.js');
const Hashtable = require('../../../data-structures/hashTable/hashtable.js');

describe('left join', () => {
  it('can perform a left join wtih the CF sample tables', () => {
    const leftHash = new Hashtable(50);
    const rightHash = new Hashtable(50);

    leftHash.add('fond', 'enamored');
    leftHash.add('wrath', 'anger');
    leftHash.add('diligent', 'employed');
    leftHash.add('outfit', 'garb');
    leftHash.add('guide', 'usher');

    rightHash.add('fond', 'averse');
    rightHash.add('wrath', 'delight');
    rightHash.add('diligent', 'idle');
    rightHash.add('guide', 'follow');
    rightHash.add('flow', 'jam');

    expect(leftJoin(leftHash, rightHash)).toMatchObject([
      ['fond', 'enamored', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow'],
    ]);
  });

  it('can return key value pairs from left table when there are no match keys on right table', () => {
    const leftHash = new Hashtable(50);
    const rightHash = new Hashtable(50);

    leftHash.add('fond', 'enamored');
    leftHash.add('wrath', 'anger');
    leftHash.add('diligent', 'employed');
    leftHash.add('outfit', 'garb');
    leftHash.add('guide', 'usher');

    rightHash.add('bob', 'saget');
    rightHash.add('kelly', 'clarkson');
    rightHash.add('ryan', 'seacrest');
    rightHash.add('jo', 'momma');
    rightHash.add('bob', 'gunderson');

    expect(leftJoin(leftHash, rightHash)).toMatchObject([
      ['fond', 'enamored', null],
      ['wrath', 'anger', null],
      ['diligent', 'employed', null],
      ['outfit', 'garb', null],
      ['guide', 'usher', null],
    ]);
  });

  it('can join tables of different lengths', () => {
    const leftHash = new Hashtable(50);
    const rightHash = new Hashtable(50);

    leftHash.add('fond', 'enamored');
    leftHash.add('wrath', 'anger');
    leftHash.add('diligent', 'employed');
    rightHash.add('diligent', 'idle');

    expect(leftJoin(leftHash, rightHash)).toMatchObject([
      ['fond', 'enamored', null],
      ['wrath', 'anger', null],
      ['diligent', 'employed', 'idle'],
    ]);
  });
});
