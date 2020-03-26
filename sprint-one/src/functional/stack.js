var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //search keys for highest value
    // if (someInstance === {}) {
    //   var index = 0;
    // }
    var maxIndex = -1;
    for (var key in storage) {
      maxIndex = (Number(key) > maxIndex) ? Number(key) : maxIndex;
    }
    maxIndex++;
    storage[maxIndex] = value;
    return storage;
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    var count = 0;
    for (var key in storage) {
      if (Number(key)) {
        count ++;
      }
    }
    return count;
  };

  return someInstance;
};
