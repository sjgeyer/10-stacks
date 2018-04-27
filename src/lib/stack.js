'use strict';

const LinkedList = require('./linked-list');

module.exports = class Stack {
  constructor() {
    this._storage = new LinkedList();
  }

  push(value) {
    this._storage.push(value);
    return this;
  }

  pop() {
    this._storage.pop();
    return this;
  }

  peek() {
    if (!this._storage.tail) throw new Error('List is empty');
    return this._storage.tail;
  }

  isEmpty() {
    return !this._storage.head;
  }
};
