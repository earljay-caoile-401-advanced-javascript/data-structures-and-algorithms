'use strict';
const Queue = require('../../../data-structures/stackAndQueue/queue.js');
const Dog = require('./animal-classes/dog.js');
const Cat = require('./animal-classes/cat.js');

class AnimalShelter {
  constructor() {
    this.queue = new Queue();
    this.rear = null;
  }

  enqueue(animal) {
    if (animal instanceof Dog || animal instanceof Cat) {
      this.queue.enqueue(animal);
      this.rear = animal;
    } else {
      throw new Error('not a cat or dog');
    }
  }

  dequeue(pref) {
    const oldFront = this.queue.peek();

    if (!oldFront) {
      return null;
    }

    const fPref = pref ? pref.toLowerCase() : null;
    let frontType = oldFront.constructor.name.toLowerCase();

    if (!fPref || !(fPref === 'cat' || fPref === 'dog') || frontType == fPref) {
      return this.queue.dequeue();
    }

    if (fPref != frontType && oldFront == this.rear) {
      return null;
    }

    while (frontType != fPref) {
      this.queue.enqueue(this.queue.dequeue());
      if (this.queue.peek() === oldFront) {
        return null;
      }
      frontType = this.queue.peek().constructor.name.toLowerCase();
    }

    const res = this.queue.dequeue();

    while (this.queue.peek() !== oldFront) {
      this.queue.enqueue(this.queue.dequeue());
    }

    return res;
  }
}

module.exports = AnimalShelter;
