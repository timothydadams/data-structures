var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var max = -1;
  for (var key in this.storage) {
    max = (Number(key) > max) ? Number(key) : max;
  }
  this.storage[max + 1] = value;
}

Queue.prototype.dequeue = function () {
  var min = Infinity; // ... and beyond
  for (var key in this.storage) {
    min = (Number(key) < min) ? Number(key) : min;
  }
  var value = this.storage[min];
  delete this.storage[min];
  return value;
}

Queue.prototype.size = function () {
  var count = 0;
  for (var key in this.storage) {
    count ++;
  }
  return count;
}
