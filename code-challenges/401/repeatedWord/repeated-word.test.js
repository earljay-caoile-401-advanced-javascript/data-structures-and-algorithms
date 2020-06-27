'use strict';

const repeatedWord = require('./repeated-word.js');

describe('repeated word function', () => {
  it('can return first repeated word in a string', () => {
    const input = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(input)).toBe('a');
  });

  it('can return the first repeated word in a longer string when the repeated word is capitalized', () => {
    const input =
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(repeatedWord(input)).toBe('it');
  });

  it('can return the first repeated word when the repeated word is next to punctuation', () => {
    const input =
      'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

    expect(repeatedWord(input)).toBe('summer');
  });

  it('can return null for an empty input string', () => {
    const input = '';
    expect(repeatedWord(input)).toBe(null);
  });

  it('can return null for a string with no repeated words', () => {
    const input = 'I do not like gree eggs and ham.';
    expect(repeatedWord(input)).toBe(null);
  });
});
