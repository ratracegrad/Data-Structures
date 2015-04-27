/***************************************
*
* Tree data structure in Javascript.
*
*****************************************/


var Tree = function(value){
  var newTree = {};

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
  newTree.traverse = treeMethods.traverse;

  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

// time complexity = O(1) / Constant
treeMethods.addChild = function(value){
  var child = Tree(value);

  child.parent = this;
  this.children.push(child);
};

// time complexity = O(1) / Constant
treeMethods.removeFromParent = function(){
  var parent = this.parent
  var childIndex = parent.children.indexOf(this);

  parent.children.splice(childIndex, 1);
  parent = null;
};

// time complexity = O(n) / Linear
treeMethods.traverse = function(cb){
  for(var i = 0; i < this.children.length; i++){
    var child = this.children[i];

    cb(child.value);
    child.traverse(cb);
  }
}

// time complexity = O(n) / Linear
treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  }

  for(var i = 0; i < this.children.length; i++){
    var child = this.children[i];

    if(child.contains(target)){
      return true
    }
  }

  return false;
};
