var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var maxIndex = -1;
  for (var key in this.storage) {
    maxIndex = (Number(key) > maxIndex) ? Number(key) : maxIndex;
  }
  this.storage[maxIndex + 1] = value;
}

queueMethods.dequeue = function() {
  var minIndex = Infinity; // and beyond
  for (var key in this.storage) {
    minIndex = (Number(key) < minIndex) ? Number(key) : minIndex;
  }
  var value = this.storage[minIndex];
  delete this.storage[minIndex];
  return value;
}

queueMethods.size = function() {
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
}


