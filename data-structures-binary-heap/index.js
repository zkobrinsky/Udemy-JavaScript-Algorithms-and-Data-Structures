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
    if (this.values.length !== 0) {
      this.values[0] = end;
    }
    this.sinkDown();
    return oldRoot ? oldRoot : null;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] > this.values[parentIndex]) {
        this.swap(this.values, index, parentIndex);
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
      return this.values[childLeftIndex] > this.values[childRightIndex]
        ? childLeftIndex
        : childRightIndex;
    };

    let greaterIndex = getGreaterIndex();
    let greaterChild = this.values[greaterIndex];

    if (greaterChild && this.values[index] < greaterChild) {
      this.swap(this.values, index, greaterIndex);
      this.sinkDown(greaterIndex);
    }
  }

  swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
}

let heap = new MaxHeap();
// for (let i = 0; i < 10; i++) {
//   heap.insert(Math.floor(Math.random() * 100));
// }
heap.insert(55);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(33);

// Colt Steele extractMax Solution (iterative):
// class MaxBinaryHeap {
//   constructor(){
//       this.values = [];
//   }
//   insert(element){
//       this.values.push(element);
//       this.bubbleUp();
//   }
//   bubbleUp(){
//       let idx = this.values.length - 1;
//       const element = this.values[idx];
//       while(idx > 0){
//           let parentIdx = Math.floor((idx - 1)/2);
//           let parent = this.values[parentIdx];
//           if(element <= parent) break;
//           this.values[parentIdx] = element;
//           this.values[idx] = parent;
//           idx = parentIdx;
//       }
//   }
// }

// let heap = new MaxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);
