class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    if (this.values.includes(val)) return this.values;
    this.values.push(val);
    this.bubbleUp();
    return this.values;
  }

  extractMax() {
    const oldRoot = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return oldRoot ? oldRoot : null;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] > this.values[parentIndex]) {
        [this.values[index], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  sinkDown(index = 0) {
    let childLeftIndex = 2 * index + 1;
    let childRightIndex = 2 * index + 2;

    const getGreaterIndex = () => {
      return this.values[childLeftIndex] > this.values[childRightIndex]
        ? childLeftIndex
        : childRightIndex;
    };

    let greaterIndex = getGreaterIndex();
    let greaterChild = this.values[greaterIndex];

    if (this.values[index] < greaterChild) {
      [this.values[index], this.values[greaterIndex]] = [
        this.values[greaterIndex],
        this.values[index],
      ];
      this.sinkDown(greaterIndex);
    }
  }

  swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
}

let heap = new MaxHeap();
for (let i = 0; i < 10; i++) {
  heap.insert(Math.floor(Math.random() * 100));
}
