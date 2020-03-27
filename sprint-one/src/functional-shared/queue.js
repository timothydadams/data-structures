var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {}
  extend(newQueue, queueMethods);
  newQueue.storage = {};
  return newQueue;

};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  //find the maxIndex
  var maxIndex = -1;
  //iterate over Stack
  for (var key in this.storage) {
    maxIndex = (Number(key) > maxIndex) ? Number(key) : maxIndex;
  }
  maxIndex++;
  this.storage[maxIndex] = value;
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