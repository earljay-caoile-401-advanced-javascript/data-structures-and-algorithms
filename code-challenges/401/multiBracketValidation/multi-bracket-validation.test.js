'use strict';
const multiBracketValidation = require('./multi-bracket-validation.js');

describe('multiBracketValidation', () => {
  it('can validate single pairs of brackets', () => {
    expect(multiBracketValidation('()')).toBe(true);
    expect(multiBracketValidation('[]')).toBe(true);
    expect(multiBracketValidation('{}')).toBe(true);
    expect(multiBracketValidation('((')).toBe(false);
    expect(multiBracketValidation('[}')).toBe(false);
    expect(multiBracketValidation('])')).toBe(false);
  });

  it('can validate multiple pairs of brackets', () => {
    expect(multiBracketValidation('{}(){}')).toBe(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
    expect(multiBracketValidation('(){}[[]]')).toBe(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
    expect(multiBracketValidation('[({}]')).toBe(false);
    expect(multiBracketValidation('(](')).toBe(false);
    expect(multiBracketValidation('{(})')).toBe(false);
  });

  it('can invalidate single brackets', () => {
    expect(multiBracketValidation('{')).toBe(false);
    expect(multiBracketValidation(')')).toBe(false);
    expect(multiBracketValidation('[')).toBe(false);
  });
});
