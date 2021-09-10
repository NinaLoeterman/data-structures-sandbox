class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (val === current.val) return current;
      if (val < current.val) {
        if (!current.left) return false;
        else current = current.left;
      } else if (val > current.val) {
        if (!current.right) return false;
        else current = current.right;
      }
    }
  }
}
