describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should contain added values', function(){
    set.add("Kenny Tran");
    expect(set.contains("Kenny Tran")).to.equal(true);
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should not have duplicates', function(){
    set.add("Kenny Tran");
    set.add("Kenny Tran");
    set.remove("Kenny Tran");
    expect(set.contains("Kenny Tran")).to.equal(false);
  });

  it('should be able to add an integer to the set', function(){
    set.add(1);
    expect(set.contains(1)).to.equal(true);
  });

  it('should be able to add an object to the set', function(){
    set.add([1]);
    expect(set.contains([1])).to.equal(true);
  });

  it('should be able to remove objects from set', function(){
    var kenny = {"kenny": 1337};
    set.add(kenny);
    expect(set.contains(kenny)).to.equal(true);
    set.remove(kenny);
    expect(set.contains(kenny)).to.equal(false);
  });

  it('should add values to a set that are a boolean', function(){
    set.add(true);
    set.add(false);
    expect(set.contains(true)).to.equal(true);
    expect(set.contains(false)).to.equal(true);
  });
});
