var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    //console.log(newNode);
    if (list.head === null) {
      list.head = newNode;
    }
    list.head.next = newNode;
    list.tail = newNode;
    console.log(list);
  };

  list.removeHead = function() {
    //save the value at head
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target) {

<<<<<<< HEAD
  //iterate over the object
  var start = list.head;

  // while (listItem !== null) {
  //   if (list.value === target) {
  //     return true;
  //     l
  //   }
  // }
=======
  //iterate over the object, starting from the head
  while (true) {
    let val = list.value
    if (val === target) {
      return true;
    }
    let list = list.head.next;
    if (list === null){
      break;
    }
  }
>>>>>>> 11710555f22365e4a5ecf1a07284339162212f9f
  return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

addToTail: O(1)
removeHead: O(1)
contains: O(n)

*/
