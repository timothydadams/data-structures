class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  //methods
  enqueue(value) {
    var max = -1;
    for (var key in this.storage) {
      max = (Number(key) > max) ? Number(key) : max;
    }
    this.storage[max +1] = value;
  }

  dequeue() {
    var min = Infinity; // ... and beyond!
    for (var key in this.storage) {
      min = (Number(key) < min) ? Number(key) : min;
    }
    var value = this.storage[min];
    delete this.storage[min];
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