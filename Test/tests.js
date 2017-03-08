QUnit.module( "renderMovieInfo function tests" );
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

/*========================================================================================================*/

QUnit.module( "renderMovieGIF function tests" );
var gifContainer = document.querySelector('.giphyMovie');
QUnit.test( "this test is to check if the div is empty", function( assert ) {
  assert.equal(gifContainer.innerHTML, "", "the div should be empty" );
});
Render.renderMovieGIF(null, []);
QUnit.test( "this test checks if the div remains empty", function( assert ) {
  assert.equal(gifContainer.innerHTML, "", "the div should be empty" );
});
QUnit.test( "this test is to check if the div has 1 gif", function( assert ) {
  var expectedOutput = '<img src=\"http://media2.giphy.com/media/FiGiRei2ICzzG/100w.gif\">';
  var gifUrl = "http://media2.giphy.com/media/FiGiRei2ICzzG/100w.gif";
  Render.renderMovieGIF(null, [gifUrl])
  assert.equal(gifContainer.innerHTML, expectedOutput, "the div should have 1 img or gif" );

});
QUnit.test( "this test is to check if the div has 1 gif", function( assert ) {
  var expectedOutput = '<img src=\"http://media2.giphy.com/media/FiGiRei2ICzzG/100w.gif\">';
  var gifUrl = "http://media2.giphy.com/media/FiGiRei2ICzzG/100w.gif";
  Render.renderMovieGIF(null, [gifUrl])
  assert.equal(gifContainer.innerHTML, expectedOutput, "the div should have 1 img or gif" );

});


/*========================================================================================================*/

QUnit.module( "makeRequest function tests" );
QUnit.test( "a basic test example 2", function( assert ) {
  assert.ok( true, "this test is fine" );
});
