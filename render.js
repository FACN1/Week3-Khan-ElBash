var Render = (function() {

  var renderMovieInfo = function(error, result) {

  };

  var renderMovieGIF = function(error, result) {
    if (error){
      console.error(error);
      return;
    }
    var gifUrls = prepareGIFUrls(result);

    var gifContainer = document.querySelector('.giphyMovie');
    gifContainer.innerHTML = "";
    for (var i = 0 ; i < gifUrls.length; i++){
      var gifImg = document.createElement('img');
      gifImg.src = gifUrls[i];
      // TODO add an alt attribute to the images
      gifContainer.appendChild(gifImg);
    }
  }

  var prepareGIFUrls = function (response) {
    // response is in the format of e.g. http://api.giphy.com/v1/gifs/search?q=titanic&api_key=dc6zaTOxFJmzC
    var gifUrls = [];

    // numberOfUrls is 3 or number of results (if less than 3)
    console.log(response);
    var numberOfUrls = Math.min(response.data.length, 3);

    for (var i = 0; i < numberOfUrls; i++) {
      gifUrls[i] = response.data[i].images.fixed_width_small.url;
    }
    return gifUrls;
  };

  return {
    renderMovieInfo: renderMovieInfo,
    prepareGIFUrls: prepareGIFUrls,
    renderMovieGIF: renderMovieGIF
  }

})();
