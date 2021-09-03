// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = (val) => {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop = () => {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift = () => {
    if (!this.head) return undefined;
    const shifted = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return shifted;
  }

  unshift = (val) => {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get = (idx) => {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set = (val, idx) => {
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert = (val, idx) => {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    let prev = this.get(idx - 1);
    if (prev) {
      const newNode = new Node(val);
      newNode.next = prev.next;
      prev.next = newNode;
    }
    this.length++;
    return true;
  }

  remove = (idx) => {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length - 1) return !!this.pop();
    if (idx === 0) return !!this.shift();
    let prev = this.get(idx - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse = () => {
    //swap head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
