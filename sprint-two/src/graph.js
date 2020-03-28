

// Instantiate a new graph ...
// ... in pseudoclassical style.
var Graph = function() {
  this.storage = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = node;
  this.edges[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (Boolean(this.storage[node]));
};

// Removes a node from the graph.
// We may also need to remove zero or more edges, if this does not occur automatically.
Graph.prototype.removeNode = function(node) {
  for(let otherNode in this.storage){
    if(node.toString() !== otherNode){
      delete this.edges[node][otherNode];
      delete this.edges[otherNode][node];
    }
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return Boolean(this.edges[fromNode][toNode]);
};

// Connects two nodes in a graph by adding an edge between them.
// This'll be a symmetric function of its inputs, because graph is unidirectional.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode][toNode] = true;
  this.edges[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode][toNode];
  delete this.edges[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(let node in this.storage){
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */