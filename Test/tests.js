QUnit.module( "renderMovieInfo function tests" );
QUnit.test( "renderMovieInfo test", function( assert ) {
  var movieInfo = document.getElementsByClassName('infoMovie')[0];

  assert.equal(movieInfo.innerHTML,"","movieInfo is empty");
  Render.renderMovieInfo(null, Fixtures.movie1)
  assert.notEqual(movieInfo.innerHTML,"", "movieInfo is not empty");

});

/*========================================================================================================*/


QUnit.module( "renderMovieGIF function tests" );

var gifContainer = document.querySelector('.giphyMovie');

QUnit.test( "this test is to check if the div is empty", function( assert ) {
  assert.equal(gifContainer.innerHTML, "", "the div should be empty" );
});

Render.renderMovieGIF(null, {data: []});

QUnit.test( "this test checks if the div remains empty", function( assert ) {
  assert.equal(gifContainer.innerHTML, "", "the div should be empty" );
});

// QUnit.test( "this test is to check if the div has 1 gif", function( assert ) {
//   var expectedOutput = '<img src=\"http://media2.giphy.com/media/FiGiRei2ICzzG/100w.gif\">';
//   var gifUrl = "http://media2.giphy.com/media/FiGiRei2ICzzG/100w.gif";
//   Render.renderMovieGIF(null, {data: [gifUrl]})
//   assert.equal(gifContainer.innerHTML, expectedOutput, "the div should have 1 img or gif" );
// });

/*========================================================================================================*/

QUnit.module( "prepareGIFUrls function tests" );

QUnit.test("test the function converts the response to an array of length 3", function (assert) {
  var response = Fixtures.mockGifResponse;

  var result = Render.prepareGIFUrls(response);

  assert.equal(result.length, 3, "output array should have length 3");
});

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

// QUnit.test( "this test is to check if the div has 1 gif", function( assert ) {
//   var expectedOutput = '<img src=\"http://media2.giphy.com/media/FiGiRei2ICzzG/100w.gif\">';
//   var gifUrl = "http://media2.giphy.com/media/FiGiRei2ICzzG/100w.gif";
//   Render.renderMovieGIF(null, [gifUrl])
//   assert.equal(gifContainer.innerHTML, expectedOutput, "the div should have 1 img or gif" );
//
// });


QUnit.test("test the function returns a list of the right number of urls if the response has fewer than 3", function (assert) {
  var response = Fixtures.mockGifResponseWithOneResult;
  var result = Render.prepareGIFUrls(response);
  assert.equal(result.length, 1, "output array should have length 1");
});

/*========================================================================================================*/
