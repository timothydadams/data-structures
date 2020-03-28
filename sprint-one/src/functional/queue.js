var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  someInstance.enqueue = function(value) {
  var maxIndex = -1;
  for (var key in storage) {
    maxIndex = (maxIndex > Number(key)) ? maxIndex : Number(key);
  }
  storage[maxIndex + 1] = value;
  };

  someInstance.dequeue = function() {
  var minIndex = Infinity;
  for (var key in storage) {
    minIndex = (minIndex < Number(key)) ? minIndex : Number(key);
  }
  //delete the property at lowest key
  var value = storage[minIndex];
  delete storage[minIndex];
  //return value
  return value;
  };

  someInstance.size = function() {
  //Return the number of items in the queue
  var count = 0
  for (var key in storage) {
    count ++;
  }
  return count;
  };
  return someInstance;
};
