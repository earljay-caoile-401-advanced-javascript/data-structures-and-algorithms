'use strict';

const Stack = require('./stack.js');
const Queue = require('./queue.js');

describe('stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('can successfully push onto a stack', () => {
    stack.push(1);
    expect(stack.storage[0]).toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.storage[0]).toEqual(1);
    expect(stack.storage[1]).toEqual(2);
  });

  it('Can successfully pop off the stack', () => {
    stack.push(1);
    stack.push(2);
    const popVal = stack.pop();
    expect(stack.storage[0]).toEqual(1);
    expect(!!stack.storage[1]).toEqual(false);
    expect(popVal).toEqual(2);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('Can successfully peek the next item on the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  it('Can successfully instantiate an empty stack', () => {
    stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('Can console log all of the values from a stack with print()', () => {
    jest.spyOn(global.console, 'log');
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.print();
    expect(console.log).toHaveBeenCalled();
  });
});

describe('queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('Can successfully enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.storage[0]).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.storage[0]).toEqual(1);
    expect(queue.storage[1]).toEqual(2);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    const dequeueVal = queue.dequeue();
    expect(queue.storage[0]).toEqual(2);
    expect(!!queue.storage[1]).toEqual(false);
    expect(dequeueVal).toEqual(1);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('Can successfully instantiate an empty queue', () => {
    queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('Can console log all of the values from a queue with print()', () => {
    jest.spyOn(global.console, 'log');
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.print();
    expect(console.log).toHaveBeenCalled();
  });
});
