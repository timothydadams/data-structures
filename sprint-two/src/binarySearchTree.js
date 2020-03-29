var BinarySearchTree = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
};

BinarySearchTree.prototype.insert = function (val) {
	if (val < this.value) {
		if (this.left === null) {
			this.left = new BinarySearchTree(val);
		} else {
			this.left.insert(val);
		}
	} else {
		if (this.right === null) {
			this.right = new BinarySearchTree(val);
		} else {
			this.right.insert(val);
		}
	}
};

BinarySearchTree.prototype.contains = function(val) {
//I could not figure out how to implement a while loop or do proper recursion here
//so I built a helper function and treated it like the DOM tree

	var isPresent = false;
	//implement a search function that looks at each node value in the BST
	function search(node) {
		//console.log(node);
		if (val === node.value) {
			isPresent = true;
		}
		if (val < node.value && node.left !== null) {
			search(node.left);
		}
		if (val > node.value && node.right !== null) {
			search(node.right);
		}
	}

	search(this); //this represents the entire BinarySearchTree object

	return isPresent;

 /* LOGIC FROM PAST ATTEMPTS

	if (val === this.value) {
		return true;
	}
	console.log(this.left.value);
	if (val < this.value) {
		if (this.left !== null) {
			this.left.contains(val);
		} else if (this.left === null){
			return false;
		}
	}

	if (val > this.value) {
		if (this.right !== null) {
			this.right.contains(val);
		} else if (this.right === null) {
			return false;
		}
	}
*/
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
	//implement a search function that looks at each node value in the BST
	function executeCB(node) {
		//console.log(node);
    cb(node.value);
		if (node.left !== null){
			executeCB(node.left);
		}
		if (node.right !== null) {
			executeCB(node.right);
		}
	}
	executeCB(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
