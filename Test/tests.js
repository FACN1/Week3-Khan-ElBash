QUnit.module( "renderMovieInfo function tests" );
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

/*========================================================================================================*/

QUnit.module( "prepareGIFUrls function tests" );

QUnit.test("test the function converts the response to an array of length 3", function (assert) {
  var response = Fixtures.mockGifResponse;
  var result = Render.prepareGIFUrls(response);
  assert.equal(result.length, 3, "output array should have length 3");
})

QUnit.test( "test the function returns an array of the right urls", function( assert ) {
  var response = Fixtures.mockGifResponse;
  var result = Render.prepareGIFUrls(response);
  var expectedOutput = [
    "http://media3.giphy.com/media/ZnOmhZv0rRbmU/100w.gif",
    "http://media2.giphy.com/media/AX1BnSZfXVsu4/100w.gif",
    "http://media2.giphy.com/media/pWDH6fkHgGHza/100w.gif"
  ];
  assert.deepEqual(result, expectedOutput, "output array should have the right urls");
});

QUnit.test("test the function returns a list of the right number of urls if the response has fewer than 3", function (assert) {
  var response = Fixtures.mockGifResponseWithOneResult;
  var result = Render.prepareGIFUrls(response);
  assert.equal(result.length, 1, "output array should have length 1");
})

/*========================================================================================================*/

QUnit.module( "makeRequest function tests" );
QUnit.test( "a basic test example 2", function( assert ) {
  assert.ok( true, "this test is fine" );
});
