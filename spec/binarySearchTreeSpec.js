describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,2,3]);
  });

  it('should go through smaller nodes first when using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(10);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(2);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 3, 2, 4, 10]);
  });

  it('should have a method "breadthFirstLog"', function(){
    expect(binarySearchTree.breadthFirstLog).to.be.a("function");
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog" in the correct order', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);

    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 10, 3, 15]);
  });

  it('should have a private getDepths function', function(){
    expect(binarySearchTree._getDepths).to.be.a("function"); 
  });

  it('getDepths should return min and max depths correctly', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.insert(25);

    var depths = binarySearchTree._getDepths();
    expect(depths[0]).to.equal(2);
    expect(depths[1]).to.equal(4);
  });

  it('should have a private rebalance function', function(){
    expect(binarySearchTree._rebalance).to.be.a("function"); 
  });

  it('expect rebalance to rebalance correctly', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.insert(25);
    binarySearchTree._rebalance();
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([10, 3, 25, 2, 5, 15]);
  });

  it('should rebalance automatically', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([3, 2, 5, 1]);
  });
});
