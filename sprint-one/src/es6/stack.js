class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  //methods below
  push(value) {
    var max = -1;
    for (var key in this.storage) {
      max = (Number(key) > max) ? Number(key) : max;
    }
    this.storage[max + 1] = value;
  }

  pop() {
    var max = -1;
    for (var key in this.storage) {
      max = (Number(key) < max) ? max : Number(key);
    }
    var value = this.storage[max];
    delete this.storage[max];
    return value;
  }

  size() {
    var count = 0;
    for (var key in this.storage) {
      count ++;
    }
    return count;
  }

}