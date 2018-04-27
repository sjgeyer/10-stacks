'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.tail = node;
    return this;
  }

  pop() {
    if (!this.head) {
      throw new Error('Cannot remove item from empty list');
    }
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    currentNode.next = null;
    return this;
  }
};
