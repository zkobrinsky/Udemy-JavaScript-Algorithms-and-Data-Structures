class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, parent = this.root) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }

    if (node.val > parent.val) {
      if (parent.right) {
        return this.insert(val, parent.right);
      } else {
        parent.right = node;
        return this;
      }
    } else if (node.val < parent.val) {
      if (parent.left) {
        return this.insert(val, parent.left);
      } else {
        parent.left = node;
        return this;
      }
    }
    return this;
  }

  find(val, parent = this.root) {
    if (!parent) return false;
    if (val === parent.val) return true;
    if (val > parent.val) {
      if (parent.right) {
        return this.find(val, parent.right);
      }
    } else if (val < parent.val) {
      if (parent.left) {
        return this.find(val, parent.left);
      }
    }
    return false;
  }
}

let tree = new BST();
for (let i = 0; i < 10; i++) {
  tree.insert(Math.floor(Math.random() * 100));
}
