var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var maxIndex = -1;
    for (var key in storage) {
      maxIndex = (Number(key) > maxIndex) ? Number(key) : maxIndex;
    }
    maxIndex++;
    storage[maxIndex] = value;
    //return storage;
  };

  someInstance.pop = function() {
    var maxIndex = -1;
    for (var key in storage) {
      maxIndex = (Number(key) > maxIndex) ? Number(key) : maxIndex;
    }
    var value = storage[maxIndex];
    delete storage[maxIndex];
    return value;
  };

  someInstance.size = function() {
    var count = 0;
    for (var key in storage) {
      count ++;
    }
    return count;
  };

  return someInstance;
};
