describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should be able to hold a large amount of children', function(){
    tree.addChild(10);
    tree.addChild(6);
    tree.addChild(15);
    tree.children[0].addChild(0);
    tree.children[1].addChild(9);
    tree.children[2].addChild(4);
    expect(tree.contains(10)).to.equal(true);
    expect(tree.contains(6)).to.equal(true);
    expect(tree.contains(15)).to.equal(true);
    expect(tree.contains(0)).to.equal(true);
    expect(tree.contains(9)).to.equal(true);
    expect(tree.contains(4)).to.equal(true);
  });

  it('should be able to detect super deeply nested children', function(){
    tree.addChild(2);
    tree.children[0].addChild(3);
    tree.children[0].children[0].addChild(4);
    tree.children[0].children[0].children[0].addChild(5);
    expect(tree.contains(2)).to.equal(true);
    expect(tree.contains(3)).to.equal(true);
    expect(tree.contains(4)).to.equal(true);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should correctly set parent', function(){
    tree.addChild(2);
    tree.children[0].addChild(3);
    expect(tree.children[0].children[0].parent.value).to.equal(2);
  });

  it('should have method removeFromParent', function(){
    expect(tree.removeFromParent).to.be.a("function");
  });

  it('should be able to remove parent', function(){
    tree.addChild(2);
    tree.children[0].addChild(3);
    tree.children[0].children[0].removeFromParent();
    expect(tree.children[0].contains(3)).to.equal(false);
  });

  it('should have method traverse', function(){
    expect(tree.traverse).to.be.a("function");
  });

  it('should be able to traverse tree', function(){
    tree.addChild(2);
    tree.children[0].addChild(3);
    tree.children[0].children[0].addChild(4);
    var array = [];
    var pushIn = function(item) { array.push(item); };
    tree.traverse(pushIn);
    expect(array).to.eql([2, 3, 4]);
  });
});
