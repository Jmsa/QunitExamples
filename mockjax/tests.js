QUnit.test("hello test", function(assert) {
  assert.ok(1 == "1", "Passed!");
});
QUnit.module("Basic math");
QUnit.test("adding", function(assert) {
  assert.equal(5, addThings(2, 3), "2 + 3 are equal to 5");
  assert.notEqual(5, addThings(1, 3), "1 + 3 are not equal to 5, they are equal to " + addThings(1, 3));
});

QUnit.module("Async tests");
// QUnit.test("getThings", function(assert){
//   assert
// });
QUnit.test("two async calls", function(assert) {
  assert.expect(2);

  var done1 = assert.async();
  var done2 = assert.async();
  setTimeout(function() {
    assert.ok(true, "test resumed from async operation 1");
    done1();
  }, 500);
  setTimeout(function() {
    assert.ok(true, "test resumed from async operation 2");
    done2();
  }, 150);
});

QUnit.test("two async calls", function(assert) {
  assert.expect(1);

  var done1 = assert.async();
  var post = getThings;
  post().done(function() {
    assert.ok(true, "test resumed from async operation 1");
    done1();
  });
});
