class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp(element);
  }

  extractMax() {
    if (this.values.length < 2) return undefined;
    const max = this.values.shift();
    const newRoot = this.values.pop();
    this.values.unshift(newRoot);

    this.bubbleDown(newRoot);
    return max;
  }

  bubbleUp(element) {
    let currentIndex = this.values.length - 1;
    let parentIndex = this.parentIdx(currentIndex);
    let parent = this.values[parentIndex];

    while (parentIndex >= 0 && element > parent) {
      this.values[parentIndex] = element;
      this.values[currentIndex] = parent;
      currentIndex = parentIndex;
      parentIndex = this.parentIdx(currentIndex);
      parent = this.values[parentIndex];
    }
  }

  bubbleDown(element) {
    let currentIndex = 0;
    let leftChildIndex = this.leftChildIdx(currentIndex);
    let rightChildIndex = this.rightChildIdx(currentIndex);
    let leftChild = this.values[leftChildIndex];
    let rightChild = this.values[rightChildIndex];

    while (element < leftChild || element < rightChild) {
      if (leftChild > rightChild) {
        this.values[currentIndex] = leftChild;
        this.values[leftChildIndex] = element;
        currentIndex = leftChildIndex;
      } else {
        this.values[currentIndex] = rightChild;
        this.values[rightChildIndex] = element;
        currentIndex = rightChildIndex;
      }
      leftChildIndex = this.leftChildIdx(currentIndex);
      rightChildIndex = this.rightChildIdx(currentIndex);
      leftChild = this.values[leftChildIndex];
      rightChild = this.values[rightChildIndex];
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

let heap = new MaxBinaryHeap();
heap.extractMax();
