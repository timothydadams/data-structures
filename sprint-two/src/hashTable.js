
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //index is the _.storage bucket we are adding to
  //the bucket is an array of tuples (2-element arrays)
  //we'll push [k,v] at the end of the array of tuples which have already been stored there
  //it's not clear to PK that we can treat the bucket as a regular array or as a LimitedArray

  //get the current bucket
  var currentBucket = this._storage.get(index);
  if (currentBucket === undefined) {
    currentBucket = [];
  } else {
    for (var i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i].indexOf(k) === 0) {
        currentBucket[i][1] = v;
      }
    }
  }
  currentBucket.push([k,v]);

  this._storage.set(index, currentBucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArray = this._storage.get(index);
  for (var i = 0; i < bucketArray.length; i++) {
    if (bucketArray[i][0] === k) {
      return bucketArray[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketArray = this._storage.get(index);
  for (var i = 0; i < bucketArray.length; i++) {
    if (bucketArray[i][0] === k) {
       bucketArray[i].splice(i,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert: Best: constant, worst: linear
retrieve: best: constant, worst: linear (depends on how good the hash function is at making unique index values)
remove: best: constant, worst: linear
 */


