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
    var index = -1;
    for (var key in someInstance) {
      index = (someInstance[key] > index) ? someInstance[key] : index;
    }
    someInstance[index] = value;
    return someInstance;
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    var count = 0;
    for (var key in someInstance) {
      if (Number(key)) {
        count ++;
      }
    }
    return count;
  };

  return someInstance;
};
