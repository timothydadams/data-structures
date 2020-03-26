var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
  //should add a string to the back of the queue
  };

  someInstance.dequeue = function() {
  //Remove and return the string at the front of the queue
  };

  someInstance.size = function() {
  //Return the number of items in the queue
  count = 0
  for (var key in obj) {
  count ++;
  }
  return count - 1;
  };


  return someInstance;
};
