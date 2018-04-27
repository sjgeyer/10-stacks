const Stack = require('../lib/stack');

describe('testing stack.js methods', () => {
  describe('PUSH', () => {
    test('Should add new value to test._storage and update tail', () => {
      const test = new Stack();
      test.push(1);
      test.push(2);
      test.push(3);
      expect(test._storage.head.value).toEqual(1);
      expect(test._storage.head.next.value).toEqual(2);
      expect(test._storage.tail.value).toEqual(3);
    });
  });

  describe('POP', () => {
    test('Should remove last value from test._storage', () => {
      const test = new Stack();
      test.push(1);
      test.push(2);
      test.push(3);
      test.pop();
      expect(test._storage.tail.value).toEqual(2);
      test.pop();
      expect(test._storage.tail.value).toEqual(1);
      test.pop();
      expect(test._storage.tail).toBeNull();
    });
    test('Should throw error for empty list', () => {
      const test = new Stack();
      expect(() => { test.pop(); }).toThrow('Cannot remove item from empty list');
    });
  });

  describe('PEEK', () => {
    test('Should display last entered node', () => {
      const test = new Stack();
      test.push(1);
      test.push(2);
      expect(test.peek().value).toEqual(test._storage.tail.value);
      expect(test.peek().next).toBeNull();
    });
    test('Should throw error on empty list', () => {
      const test = new Stack();
      expect(() => { test.peek(); }).toThrow('List is empty');
    });
  });

  describe('ISEMPTY', () => {
    test('Should return true', () => {
      const test = new Stack();
      expect(test.isEmpty()).toEqual(true);
    });
    test('Should return false', () => {
      const test = new Stack();
      test.push(1);
      expect(test.isEmpty()).toEqual(false);
      test.push(2);
      expect(test.isEmpty()).toEqual(false);
    });
  });
});
