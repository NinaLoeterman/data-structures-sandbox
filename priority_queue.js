class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp(node);
    return this.values;
  }

  dequeue() {
    if (this.values.length < 2) return undefined;
    const root = this.values.shift();
    const newRoot = this.values.pop();
    this.values.unshift(newRoot);

    this.bubbleDown(newRoot);
    return root;
  }

  bubbleUp(node) {
    let currentIdx = this.values.length - 1;
    let parentIdx = this.parentIdx(currentIdx);
    let parent = this.values[parentIdx];

    while (parentIdx >= 0 && node.priority < parent.priority) {
      this.values[parentIdx] = node;
      this.values[currentIdx] = parent;
      currentIdx = parentIdx;
      parentIdx = this.parentIdx(currentIdx);
      parent = this.values[parentIdx];
    }
  }

  bubbleDown(node) {
    let currentIdx = 0;
    let leftChildIdx = this.leftChildIdx(currentIdx);
    let rightChildIdx = this.rightChildIdx(currentIdx);
    let leftChild = this.values[leftChildIdx];
    let rightChild = this.values[rightChildIdx];

    while (
      node.priority > leftChild.priority ||
      node.priority > rightChild.priority
    ) {
      if (leftChild.priority > rightChild.priority) {

      } else {

      }
    }
  }

  leftChildIdx(index) {
    return index * 2 + 1;
  }

  rightChildIdx(index) {
    return index * 2 + 2;
  }

  parentIdx(index) {
    return Math.floor((index - 1) / 2);
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("back ache", 4);
priorityQueue.enqueue("gun shot", 1);
priorityQueue.enqueue("high fever", 2);
