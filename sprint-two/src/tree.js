var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // PAK fixed by changing "null" to "[]"
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if(this.value === target){
    return true;
  }else{
    for (let child of this.children){
      if(child.contains(target)){
        return true;
      }
    }
    return false;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addChild: O(1)
contains: O(n)
 */
