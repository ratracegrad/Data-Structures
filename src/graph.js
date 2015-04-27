/***************************************
*
* Graph data structure in Javascript.
*
*****************************************/

var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

// time complexity = O(1) / Constant
Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

// time complexity = O(n) / Linear
Graph.prototype.contains = function(node){
  return this.nodes.indexOf(node) > -1;
};

// time complexity = O(n) / Linear
Graph.prototype.removeNode = function(node){
  var index = this.nodes.indexOf(node);

  // deletes corresponding edges
  for(var i = 0; i < this.edges.length; i++){
    var edge = this.edges[i];

    if(edge.indexOf(node) !== 1){
      this.edges.splice(i, 1);
      i--;
    }
  }

  this.nodes.splice(index, 1);
};

// time complexity = O(n) / Linear
Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i = 0; i < this.edges.length; i++){
    var edge = this.edges[i];

    if(this._equalNode(edge, fromNode, toNode)){
      return true;
    }
  }

  return false;
};

// time complexity = O(n) / Linear
Graph.prototype.addEdge = function(fromNode, toNode){
  if(this.contains(fromNode) && this.contains(toNode)){
    this.edges.push([fromNode, toNode]);
  }
};

// time complexity = O(n) / Linear
Graph.prototype.removeEdge = function(fromNode, toNode){
  var index;
  for(var i = 0; i < this.edges.length; i++){
    var edge = this.edges[i];

    if(this._equalNode(edge, fromNode, toNode)){
      index = i;
    }
  }

  this.edges.splice(index, 1);
};

// time complexity = O(n) / Linear
Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

// time complexity = O(1) / Constant
Graph.prototype._equalNode = function(child,toNode, fromNode){
  // check for unordered edge
  return  child[0] === fromNode && child[1] === toNode || 
          child[0] === toNode && child[1] === fromNode;
}
