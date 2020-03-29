var BinarySearchTree = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value) {
	console.log(this);
  if (value === this.value){
    return true;
  }
  if (value < this.value) {
    if (this.left !== null) {
      this.left.contains(value);
    } else {
      return false;
    }
	}
	if (value > this.value) {
    if (this.right !== null) {
      this.right.contains(value);
    } else {
			return false;
    }
  }
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
