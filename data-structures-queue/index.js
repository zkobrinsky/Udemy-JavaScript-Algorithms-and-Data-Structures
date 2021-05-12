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

  unqueue(val) {
    let node = new Node(val);
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let oldFirst = { ...this.first };
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    size--;
    return oldFirst.val;
  }
}

// let q = new Queue();
// for (let i = 1; i <= 10; i++) {
//   q.enqueue(i);
// }
// q.enqueue(1);
