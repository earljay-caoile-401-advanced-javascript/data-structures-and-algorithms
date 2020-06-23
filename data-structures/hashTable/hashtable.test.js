const Hashtable = require('./hashtable.js');

describe('hashtable', () => {
  it('can initialize a hashtable object with an empty array', () => {
    const table = new Hashtable();
    expect(table).toBeDefined();
    expect(table.hashArr).toMatchObject(new Array(1234));
  });
  
  it('can add a key value pair to table and find it later', () => {
    const table = new Hashtable();
    table.add('mouse', 'cheese');
    expect(table.get('mouse')).toBe('cheese');

    table.add(1234234, 'nums');
    expect(table.get(1234234)).toBe('nums');

    table.add([1, 2, 3], 'dat array');
    expect(table.get([1, 2, 3])).toBe('dat array');

    table.add({ someProp: 'test', testing: true }, 'dat obj');
    expect(table.get({ someProp: 'test', testing: true })).toBe('dat obj');
  });

  it('can handle collisions and still find key value pairs', () => {
    const table = new Hashtable();
    table.add('asdf', 'first');
    table.add('fdas', 'second');
    table.add('sdfa', 'third');
    table.add('fads', 1337);

    expect(table.get('asdf')).toBe('first');
    expect(table.get('fdas')).toBe('second');
    expect(table.get('sdfa')).toBe('third');
    expect(table.get('fads')).toBe(1337);
  });

  it('can return null for key that does not exist', () => {
    const table = new Hashtable();

    expect(table.get('ham')).toBe(null);
    expect(table.get(4312)).toBe(null);
  });

  it('can find value for an already existing key', () => {
    const table = new Hashtable();
    table.add('asdf', 'first');
    table.add('asdf', 'second');

    expect(table.get('asdf')).toBe('second');
    table.add('asdf', 'third');

    expect(table.get('asdf')).toBe('third');
  });

  it('can return whether the table contains a key', () => {
    const table = new Hashtable();
    table.add('eggs', 123);
    table.add(777, 'lucky');
    expect(table.contains('eggs')).toBe(true);
    expect(table.contains('segg')).toBe(false);
    expect(table.contains('bob')).toBe(false);
    expect(table.contains(777)).toBe(true);
  });
});