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
    //put the node in the right spot based on its priority
  }

  dequeue() {
      //remove root
      //rearange the heap
      //return removed root
  }
}
