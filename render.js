var Render = (function() {

  var renderMovieInfo = function(error, response) {
    if (error) {
      console.log(error);
      return error;
    }
    var movieInfoDiv = document.getElementsByClassName('infoMovie')[0];
    var titleHeaderElement = document.createElement("h2");
    titleHeaderElement.innerHTML = response.Title;
    movieInfoDiv.appendChild(titleHeaderElement);
    var plot = document.createElement("p");
    plot.innerHTML = response.Plot;
    movieInfoDiv.appendChild(plot);

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
