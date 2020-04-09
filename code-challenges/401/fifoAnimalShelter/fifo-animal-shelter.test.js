'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');
const Dog = require('./animal-classes/dog.js');
const Cat = require('./animal-classes/cat.js');
const Bird = require('./animal-classes/bird.js');
const Fish = require('./animal-classes/fish.js');

describe('AnimalShelter', () => {
  let shelter;
  let dog1;
  let dog2;
  let cat1;
  let cat2;
  let bird1;
  let fish1;

  beforeEach(() => {
    shelter = new AnimalShelter();
    dog1 = new Dog('Spot');
    dog2 = new Dog('Snoopy');
    cat1 = new Cat('Simba');
    cat2 = new Cat('Garfield');
    bird1 = new Bird('Polly');
    fish1 = new Fish('Nemo');
  });

  it('can enqueue a cat', () => {
    shelter.enqueue(cat1);
    expect(shelter.queue.peek()).toEqual(cat1);
    expect(shelter.queue.peek()).not.toBe(cat2);
    expect(shelter.queue.peek().name).toEqual('Simba');
  });

  it('can enqueue a dog', () => {
    shelter.enqueue(dog1);
    expect(shelter.queue.peek()).toEqual(dog1);
    expect(shelter.queue.peek()).not.toBe(dog2);
    expect(shelter.queue.peek().name).toEqual('Spot');
  });

  it('canot enqueue an animal that is not a cat or dog', () => {
    expect(() => shelter.enqueue(bird1)).toThrowError('not a cat or dog');
    expect(() => shelter.enqueue(fish1)).toThrowError('not a cat or dog');
  });

  it('can dequeue a cat or dog without preference', () => {
    shelter.enqueue(cat1);
    shelter.enqueue(cat2);
    shelter.enqueue(dog1);
    shelter.enqueue(dog2);

    expect(shelter.dequeue()).toEqual(cat1);
  });

  it('can dequeue a cat or dog through preference', () => {
    shelter.enqueue(cat1);
    shelter.enqueue(cat2);
    shelter.enqueue(dog1);
    shelter.enqueue(dog2);

    expect(shelter.dequeue('dog')).toEqual(dog1);
    expect(shelter.dequeue('cat')).toEqual(cat1);
    expect(shelter.dequeue('dog')).toEqual(dog2);
    expect(shelter.dequeue('cat')).toEqual(cat2);
  });

  it('can avoid dequeueing if animal does not exist', () => {
    shelter.enqueue(cat1);
    expect(shelter.dequeue('dog')).toEqual(null);

    shelter.dequeue('cat');
    expect(shelter.dequeue('cat')).toEqual(null);
  });
});
