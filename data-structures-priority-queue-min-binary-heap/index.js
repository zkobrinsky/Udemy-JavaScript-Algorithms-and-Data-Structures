class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  dequeue() {
    const oldRoot = this.values[0];
    const end = this.values.pop();
    if (this.values.length !== 0) {
      this.values[0] = end;
    }
    this.sinkDown();
    return oldRoot;
  }

  bubbleUp(index = this.values.length - 1) {
    let parentIndex = Math.floor((index - 1) / 2);
    let parent = this.values[parentIndex];
    if (parent?.priority > this.values[index].priority) {
      this.swap(this.values, index, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  sinkDown(index = 0) {
    // debugger;
    let childLeftIndex = 2 * index + 1;
    let childRightIndex = 2 * index + 2;
    const getGreaterIndex = () => {
      if (
        this.values[childLeftIndex] === undefined &&
        this.values[childRightIndex] !== undefined
      ) {
        return childRightIndex;
      }
      if (
        this.values[childRightIndex] === undefined &&
        this.values[childLeftIndex] !== undefined
      ) {
        return childLeftIndex;
      }

      if (
        this.values[childLeftIndex] === undefined &&
        this.values[childRightIndex] === undefined
      ) {
        return null;
      }
      return this.values[childLeftIndex].priority <
        this.values[childRightIndex].priority
        ? childLeftIndex
        : childRightIndex;
    };

    let greaterIndex = getGreaterIndex();
    let greaterChild = this.values[greaterIndex];

    if (greaterChild && this.values[index].priority > greaterChild.priority) {
      this.swap(this.values, index, greaterIndex);
      this.sinkDown(greaterIndex);
    }
  }

  swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
}

let queue = new PriorityQueue();
queue.enqueue(77, 3);
queue.enqueue(3, 9);
queue.enqueue(234, 2);
queue.enqueue("hello", 0);
queue.enqueue("hello again", 1);
queue.enqueue("urgent", 0);
