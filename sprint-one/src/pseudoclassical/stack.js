var Stack = function() {
  this.storage = {};
};

//use Stack.prototype chain to declare methods
Stack.prototype.push = function(value) {
  var max = -1;
  for (var key in this.storage) {
    max = (Number(key) > max) ? Number(key) : max;
  }
  this.storage[max + 1] = value;
}

Stack.prototype.pop = function(){
  var max = -1;
  for(var key in this.storage) {
    max = (Number(key) > max) ? Number(key) : max;
  }
  var value = this.storage[max];
  delete this.storage[max];
  return value;
}

Stack.prototype.size = function() {
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
}

