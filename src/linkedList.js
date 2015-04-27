/***************************************
*
* Linked List data structure in Javascript.
*
*****************************************/

var LinkedList = function(){
  var list = {};
  list.head = null; 
  list.tail = null; 

  // time complexity = O(1) / Constant
  list.addToTail = function(value){
    var newNode = Node(value);

    if(!list.head){
      list.head = newNode;
    } else {
      list.tail.next = newNode;  
    }
    
    list.tail = newNode;
  };

  // time complexity = O(1) / Constant
  list.removeHead = function(){
    var trash = list.head.value;
    list.head = list.head.next;

    return trash;
  };

  // time complexity = O(n) / Linear
  list.contains = function(target){
    var currentNode = list.head;

    while(currentNode){
      if (currentNode.value === target){
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
