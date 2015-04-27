/***************************************
*
* Binary Search Tree structure in Javascript.
*
*****************************************/

var BinarySearchTree = function(value){
  var node = {};
  node.value = value;
  node.left = false;
  node.right = false;

  // time complexity : O(log n)
  node.insert = function(val){
    if(val > this.value){
      this.right ? this.right.insert(val) : this.right = BinarySearchTree(val);
    } else {
      this.left ? this.left.insert(val) : this.left = BinarySearchTree(val);
    }

    var depthTuple = this._getDepths();
    var minDepth = depthTuple[0];
    var maxDepth = depthTuple[1];

    if(maxDepth / 3 > minDepth){
      this._rebalance();
    }
  };

  // time complexity : O(log n)
  node.contains = function(val){
    if(this.value === val){
      return true;
    }
    
    var nextNode = this.value > val ? this.left : this.right;
    return nextNode && nextNode.contains(val);
  };

  // time complexity : O(n) / Linear
  node.depthFirstLog = function(cb){
    cb(this.value);

    if(this.left){
      this.left.depthFirstLog(cb);
    }

    if(this.right){
      this.right.depthFirstLog(cb);
    }
  };

  // time complexity : O(n) / Linear
  node.breadthFirstLog = function(cb){
    var children = [this];

    while(children.length !== 0){
      var newChildren = [];

      for(var i = 0; i < children.length; i++){
        cb(children[i].value);
        children[i].left && newChildren.push(children[i].left);
        children[i].right && newChildren.push(children[i].right);
      }

      children = newChildren;
    }
  };

  node._getDepths = function(){
    var children = [this];
    var maxLevels = 0;
    var minLevels = 0;
    var separated = false;

    while(children.length !== 0){
      var newChildren = [];
      maxLevels++;

      for(var i = 0; i < children.length; i++){
        children[i].left && newChildren.push(children[i].left);
        children[i].right && newChildren.push(children[i].right);
        if(!separated && (!children[i].left || !children[i].right)){
          separated = true;
          minLevels = maxLevels;
        }
      }

      children = newChildren;
    }

    return [minLevels, maxLevels];
  };

  node._clearTree = function(){
    this.value = null;
    this.left = false;
    this.right = false;

    if(this.left){
      this.left._clearTree();
    }

    if(this.right){
      this.right._clearTree();
    }
  };

  node._rebalance = function(){
    var nodes = [];
    this.depthFirstLog(function(node){ nodes.push(node); });
    this._clearTree();
    nodes = nodes.sort(function(a,b) {return a - b});
    
    var medianIndex = Math.floor(nodes.length / 2);
    var median = nodes[medianIndex];
    this.value = median;

    var left = nodes.slice(0, medianIndex);
    var right = nodes.slice(medianIndex + 1);

    setupTree(left, this);
    setupTree(right, this);
  };

  var setupTree = function(arr, parent){
    if(arr.length === 0){
      return false;
    }

    var medianIndex = Math.floor(arr.length / 2);
    var median = arr[medianIndex];
    parent.insert(median);

    var left = arr.slice(0, medianIndex);
    var right = arr.slice(medianIndex + 1);

    setupTree(left, parent);
    setupTree(right, parent);
  };

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
