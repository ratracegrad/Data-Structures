var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// time complexity : O(1) / Constant
setPrototype.add = function(item){
  this._storage[item] = true;
};

// time complexity : O(1) / Constant
setPrototype.contains = function(item){
  return !!this._storage[item];
};

// time complexity : O(1) / Constant
setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
