describe('graph', function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge" and "forEachNode"', function() {
    expect(graph.addNode).to.be.a("function");
    expect(graph.contains).to.be.a("function");
    expect(graph.removeNode).to.be.a("function");
    expect(graph.hasEdge).to.be.a("function");
    expect(graph.addEdge).to.be.a("function");
    expect(graph.removeEdge).to.be.a("function");
    expect(graph.forEachNode).to.be.a("function");
  });

  it('should store values as nodes that were inserted', function() {
    graph.addNode('kittens');
    expect(graph.contains('kittens')).to.equal(true);
  });

  it('should remove nodes that were inserted', function() {
    graph.addNode('puppies');
    expect(graph.contains('puppies')).to.equal(true);
    graph.removeNode('puppies');
    expect(graph.contains('puppies')).to.equal(false);
  });

  it('should create edges between two nodes', function() {
    graph.addNode('puppies');
    graph.addNode('kittens');
    graph.addNode('penguins');
    graph.addEdge('penguins', 'puppies');
    expect(graph.hasEdge('penguins', 'puppies')).to.equal(true);
    expect(graph.hasEdge('penguins', 'kittens')).to.equal(false);
  });

  it('should not create an edge for nodes that don"t exist', function(){
    graph.addNode('puppies');
    graph.addEdge('puppies', 'ninjas');
    expect(graph.hasEdge('puppies', 'ninjas')).to.equal(false);
  });

  it('should remove edges between nodes', function() {
    graph.addNode('apples');
    graph.addNode('satsumas');
    graph.addEdge('satsumas', 'apples');
    expect(graph.hasEdge('apples', 'satsumas')).to.equal(true);
    graph.removeEdge('apples', 'satsumas');
    expect(graph.hasEdge('apples', 'satsumas')).to.equal(false);
  });

  it('should allow multiple edges to one node', function() {
    graph.addNode('puppies');
    graph.addNode('kittens');
    graph.addNode('penguins');
    graph.addNode('eskimos');
    graph.addEdge('penguins', 'puppies');
    graph.addEdge('kittens', 'puppies');
    graph.addEdge('eskimos', 'puppies');
    expect(graph.hasEdge('penguins', 'puppies')).to.equal(true);
    expect(graph.hasEdge('kittens', 'puppies')).to.equal(true);
    expect(graph.hasEdge('eskimos', 'puppies')).to.equal(true);
  });

  it('should execute a callback on each node in the graph', function() {
    var connectToSatsumas = function(item) {
      graph.addEdge(item, 'satsumas');
    };
    graph.addNode('satsumas');
    graph.addNode('puppies');
    graph.addNode('kittens');
    graph.addNode('penguins');
    graph.forEachNode(connectToSatsumas);
    expect(graph.hasEdge('puppies', 'satsumas')).to.equal(true);
    expect(graph.hasEdge('kittens', 'satsumas')).to.equal(true);
    expect(graph.hasEdge('penguins', 'satsumas')).to.equal(true);
    expect(graph.hasEdge('satsumas', 'satsumas')).to.equal(true);
  });

  it('should delete edges connected to node after removing node', function(){
    graph.addNode('kittens');
    graph.addNode('penguins');
    graph.addEdge('kittens', 'penguins');
    graph.removeNode('kittens');
    expect(graph.hasEdge('kittens', 'penguins')).to.equal(false);
  });
});
