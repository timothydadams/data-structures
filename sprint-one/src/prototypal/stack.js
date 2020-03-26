var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var maxIndex = -1;
  for (var key in this.storage) {
    maxIndex = (Number(key) > maxIndex) ? Number(key) : maxIndex;
  }
  this.storage[maxIndex + 1] = value;
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