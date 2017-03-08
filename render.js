var Render = (function() {

  var renderMovieInfo = function(response) {

  };

  var renderMovieGIF = function(gifUrls) {
    // gifUrls is an array of gif urls
    // this fills up the html page
    var gifContainer = document.querySelector('.giphyMovie');
    gifContainer.innerHTML = "";
    for (var i = 0 ; i < gifUrls.length; i++){
      var gifImg = document.createElement('img');
      gifImg.src = gifUrls[i];
      // TODO add an alt attribute to the images
      gifContainer.appendChild(gifImg);
    }
  };

  return {
    renderMovieInfo: renderMovieInfo,
    renderMovieGIF: renderMovieGIF
  }

})();
