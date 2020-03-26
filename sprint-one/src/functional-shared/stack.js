var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  extend(newStack, stackMethods);
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
console.log(this);
for (var key in this) {
  maxIndex = (Number(key) > maxIndex) ? Number(key) : maxIndex;
}
maxIndex++;
this.maxIndex = value;
}

stackMethods.pop = function() {
var minIndex = Infinity;
for (var key in this) {
  minIndex = (Number(key) < minIndex) ? Number(key) : minIndex;
}
var value = this.minIndex;
delete this.minIndex;
return value;
}

stackMethods.size = function() {
var count = 0;
for (var key in this) {
  //console.log(key);
  if (Number.parseInt(key) >= 0) {

    count++;
  }
}
return count;
}