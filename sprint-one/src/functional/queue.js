var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
  //should add a string to the back of the queue
  //initialize maxIndex variable to -1
  var maxIndex = -1;
  // find maxIndex by iterating over keys in storage
  for (var key in storage) {
    maxIndex = (maxIndex > Number(key)) ? maxIndex : Number(key);
  }
  // add new property @ maxIndex + 1 of value
  //maxIndex++;
  storage[maxIndex + 1] = value;
  };

  someInstance.dequeue = function() {
  //Remove and return the string at the front of the queue
  //find the lowest key in storage
  var minIndex = Infinity;
  //create value variable to store the value at lowest key
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
