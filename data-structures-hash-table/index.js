class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    // debugger;
    if (!this.keyMap[index]) return undefined;
    return this.keyMap[index].find(e => e[0] === key)[1];
  }

  keys() {
    let result = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        if (this.keyMap[i].length > 1) {
          for (let k = 0; k < this.keyMap[i].length; k++) {
            if (!result.includes(this.keyMap[i][k][0]))
              result.push(this.keyMap[i][k][0]);
          }
        } else {
          if (!result.includes(this.keyMap[i][0][0]))
            result.push(this.keyMap[i][0][0]);
        }
      }
    }
    return result;
  }

  values() {
    let result = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        if (this.keyMap[i].length > 1) {
          for (let k = 0; k < this.keyMap[i].length; k++) {
            if (!result.includes(this.keyMap[i][k][1]))
              result.push(this.keyMap[i][k][1]);
          }
        } else {
          if (!result.includes(this.keyMap[i][0][1]))
            result.push(this.keyMap[i][0][1]);
        }
      }
    }
    return result;
  }
}

let hash = new HashTable();
hash.set("pink", "#FFC0CB");
hash.set("e", "#FFC0CB");
hash.set("new key", "blah blah");
