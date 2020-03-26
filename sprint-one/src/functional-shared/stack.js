var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  extend(newStack, stackMethods);
  newStack.storage = {};
  return newStack;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  //find the maxIndex
  var maxIndex = -1;
  //iterate over Stack
  for (var key in this.storage) {
    maxIndex = (Number(key) > maxIndex) ? Number(key) : maxIndex;
  }
  maxIndex++;
  this.storage[maxIndex] = value;
}

stackMethods.pop = function() {
  var maxIndex = -1;
  console.log(this);
  for (var key in this.storage) {
    maxIndex = (Number(key) > maxIndex) ? Number(key) : maxIndex;
  }
  var value = this.storage[maxIndex];
  delete this.storage[maxIndex];
  return value;
}

stackMethods.size = function() {
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
}