var Render = (function() {

  var renderMovieInfo = function(error, result) {

  };

  var prepareGIFUrls = function (response) {
    // response is in the format of e.g. http://api.giphy.com/v1/gifs/search?q=titanic&api_key=dc6zaTOxFJmzC
    var gifUrls = [];

    // numberOfUrls is 3 or number of results (if less than 3)
    var numberOfUrls = Math.min(result.data.length, 3);

    for (var i = 0; i < numberOfUrls; i++) {
      gifUrls[i] = result.data[i].images.fixed_width_small.url;
    }
    return gifUrls;
  };

  var renderMovieGIF = function(error, result) {
    
  };

  return {
    renderMovieInfo: renderMovieInfo,
    prepareGIFUrls: prepareGIFUrls,
    renderMovieGIF: renderMovieGIF
  }

})();
