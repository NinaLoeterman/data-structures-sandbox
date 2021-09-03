class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = (val) => {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  };

  pop = () => {
    if (!this.head) return undefined;
    const popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  };

  shift = () => {
    if (!this.head) return undefined;
    const shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    }
    this.length--;
    return shifted;
  };

  unshift = (val) => {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  };

  get = (idx) => {
    if (idx < 0 || idx >= this.length) return undefined;
    const halfway = idx < this.length / 2;
    let current = halfway ? this.head : this.tail;
    let counter = halfway ? 0 : this.length - 1;
    while (counter !== idx) {
      current = halfway ? current.next : current.prev;
      halfway ? counter++ : counter--;
    }
    return current;
  };

  set = (idx, val) => {
    const location = this.get(idx);
    if (location) {
      location.val = val;
      return true;
    } else {
      return false;
    }
  };

  insert = (idx, val) => {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const beforeNode = this.get(idx - 1);
    const afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  };

  remove = (idx) => {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return !!this.shift();
    if (idx === this.length - 1) return !!this.pop();

    const removed = this.get(idx);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  };
}
