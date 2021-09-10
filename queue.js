class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        //add to the end
        const node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }   
        this.size++
        return this; 
    }

    dequeue() {
        //remove from begining
        if(!this.first) return null;
        if(this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return this;
    }
}