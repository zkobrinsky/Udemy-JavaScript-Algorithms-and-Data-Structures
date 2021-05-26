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
    if (!parent) return null;
    if (val === parent.val) return parent;
    if (val > parent.val) {
      if (parent.right) {
        return this.find(val, parent.right);
      }
    } else if (val < parent.val) {
      if (parent.left) {
        return this.find(val, parent.left);
      }
    }
    return null;
  }

  BFS() {
    let data = [],
      queue = [],
      node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFS_Pre() {
    let data = [];
    recurse(this.root);

    function recurse(node) {
      data.push(node.val);
      if (node.left) recurse(node.left);
      if (node.right) recurse(node.right);
    }
    return data;
  }

  DFS_Post() {
    let data = [];
    recurse(this.root);

    function recurse(node) {
      if (node.left) recurse(node.left);
      if (node.right) recurse(node.right);
      data.push(node.val);
    }
    return data;
  }

  DFS_InOrder() {
    let data = [];
    recurse(this.root);

    function recurse(node) {
      if (node.left) recurse(node.left);
      data.push(node.val);
      if (node.right) recurse(node.right);
    }
    return data;
  }
}

let tree = new BST();
for (let i = 0; i < 10; i++) {
  tree.insert(Math.floor(Math.random() * 100));
}
