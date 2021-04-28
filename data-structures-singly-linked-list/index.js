class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
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

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

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

  shift() {
    if (!this.head) return undefined;
    let returnVal = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return returnVal;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let oldHead = this.head;
      newNode.next = oldHead;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  getIndexOf(val) {
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      if (current.val === val) return i;
      if (current.next) current = current.next;
    }
    return undefined;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(value, index) {
    let node = this.get(index) ? this.get(index) : false;
    if (node === false) return node;
    node.val = value;
    return true;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let leftNode = this.get(index - 1);
    let rightNode = this.get(index);

    let newNode = new Node(value);
    leftNode.next = newNode;
    newNode.next = rightNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let node = this.get(index);
    let rightNode = node.next;
    let leftNode = this.get(index - 1);
    leftNode.next = rightNode;
    node.val = null;
    this.length--;
    return node;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    //         swap
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

let newList = new SinglyLinkedList();
newList.push(2);
newList.push(3);
newList.push(4);
newList.push(7);
newList.push(89);
// newList.traverse()
// newList.getIndexOf(89)
// newList.pop()
// newList.shift()
// newList.unshift(89)
// newList.get(2)
// newList.insert(34,2)
// newList.remove(2)
newList.reverse();
// newList.print();
