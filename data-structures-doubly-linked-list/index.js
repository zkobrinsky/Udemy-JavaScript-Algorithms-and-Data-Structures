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

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let oldTail = this.tail;
      oldTail.next = node;
      this.tail = node;
      node.prev = oldTail;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    let middle = Math.floor(this.length / 2);
    if (index >= this.length || index < 0) return undefined;
    if (index > middle) {
      let node = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        node = node.prev;
      }
      return node;
    } else {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }

  print() {
    let arr = [];
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }

  insert(index, val) {
    if (index === this.length) {
      return this.push(val);
    } else if (index === 0) {
      return this.unshift(val);
    } else {
      let node = this.get(index - 1);
      if (!node) return false;
      let newNode = new Node(val);
      newNode.prev = node;
      newNode.next = node.next;
      node.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let node = this.get(index);
    if (!node) return undefined;

    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
    this.length--;
    return node;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

// let list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// list.push(5);
