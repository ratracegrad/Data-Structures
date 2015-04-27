/***************************************
*
* Set data structure in Javascript.
*
*****************************************/

var Set = function(){
  var set = Object.create(setPrototype);

  set._storage = {};
  return set;
};

var setPrototype = {};

// time complexity : O(1) / Constant
setPrototype.add = function(item){
  var temp = JSON.stringify(item);

  this._storage[temp] = true;
};

// time complexity : O(1) / Constant
setPrototype.contains = function(item){
  var temp = JSON.stringify(item);

  return !!this._storage[temp];
};

// time complexity : O(1) / Constant
setPrototype.remove = function(item){
  var temp = JSON.stringify(item);
  
  delete this._storage[temp];
};
