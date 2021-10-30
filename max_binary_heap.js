class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp(element);
    console.log(this.values)
  }

  bubbleUp(element) {
    let currentIndex = this.values.length - 1;
    let parentIndex = this.findParentIndex(currentIndex);
    let parent = this.values[parentIndex];

    while (parentIndex >= 0 && element > parent) {
      this.values[parentIndex] = element;
      this.values[currentIndex] = parent;
      currentIndex = parentIndex;
      parentIndex = this.findParentIndex(currentIndex);
      parent = this.values[parentIndex];
    }
  }

  findParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
}

let heap = new MaxBinaryHeap();
heap.insert(37);
