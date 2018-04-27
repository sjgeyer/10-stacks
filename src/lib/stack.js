'use strict';

const LinkedList = require('./linked-list');

module.exports = class Stack {
  constructor() {
    this._storage = new LinkedList();
  }

  push(value) { // O(N) where N = number of nodes in list held in this._storage
    this._storage.push(value);
    return this;
  }

  pop() { // O(N) where N = number of nodes in list held in this._storage
    this._storage.pop();
    return this;
  }

  peek() { // O(1)
    if (!this._storage.tail) throw new Error('List is empty');
    return this._storage.tail;
  }

  isEmpty() { // O(1)
    return !this._storage.head;
  }
};
