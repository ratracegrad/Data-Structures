/***************************************
*
* Double Linked List data structure in Javascript.
*
*****************************************/

var DoubleLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // time complexity : O(1)
  list.addToHead = function(value){
    var newNode = new Node(value);

    if (list.head === null) {
      list.head = newNode;
    } else {
      list.head.previous = newNode;
      newNode.next = list.head;
    }

    list.head = newNode;
  };

  // time complexity : O(1)
  list.removeTail = function(){
    var trash = list.tail.value;

    if (list.tail.previous === undefined) {
      list.tail = null;
    } else {
      var newTail = list.tail.previous;
      newTail.next = null;
      list.tail = NewTail;
    }

    return trash;
  };

  // time complexity : O(1)
  list.removeHead = function(){
    var trash = list.head.value;

    if (list.head.next === null) {
      list.head = null;
    } else {
      var newHead = list.head.next;
      newHead.previous = null;
      list.head = newHead;
    } 
    
    return trash;
  };

  // time complexity : O(1)
  list.addToTail = function(value){
    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.previous = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  // time complexity : O(n)
  list.contains = function(target){
    var currentNode = list.head;

    do {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    } while (currentNode);

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
