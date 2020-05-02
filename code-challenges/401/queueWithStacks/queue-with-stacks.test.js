'use strict';
const PseudoQueue = require('./queue-with-stacks.js');

describe('queue', () => {
  let queue;

  beforeEach(() => {
    queue = new PseudoQueue();
  });

  it('Can successfully enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.stack1.peek()).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.stack1.peek()).toEqual(2);
    expect(queue.stack1.top.next.val).toEqual(1);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    const dequeueVal = queue.dequeue();
    expect(queue.stack1.peek()).toEqual(2);
    expect(queue.stack1.top.next).toEqual(null);
    expect(dequeueVal).toEqual(1);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.stack1.peek()).toEqual(null);
  });

  it('Can successfully instantiate an empty queue', () => {
    queue = new PseudoQueue();
    expect(queue.stack1.peek()).toEqual(null);
  });
});
