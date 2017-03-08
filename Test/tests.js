QUnit.module( "renderMovieInfo function tests" );
QUnit.test( "renderMovieInfo test", function( assert ) {
  var movieInfo = document.getElementsByClassName('infoMovie')[0];
  console.log(movieInfo);
  assert.equal(movieInfo.innerHTML,"","movieInfo is empty");
  Render.renderMovieInfo(Fixtures.movie1)
  assert.notEqual(movieInfo.innerHTML,"", "movieInfo is not empty");

});

/*========================================================================================================*/

QUnit.module( "renderMovieGIF function tests" );
QUnit.test( "a basic test example 1", function( assert ) {
  assert.ok( true, "this test is fine" );
});

/*========================================================================================================*/

QUnit.module( "makeRequest function tests" );
QUnit.test( "a basic test example 2", function( assert ) {
  assert.ok( true, "this test is fine" );
});
