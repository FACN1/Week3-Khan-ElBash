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

  var renderMovieGIF = function(response) {

  };

  return {
    renderMovieInfo: renderMovieInfo,
    renderMovieGIF: renderMovieGIF
  }
})();
