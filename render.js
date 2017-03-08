var Render = (function() {
  document.querySelector('button').addEventListener('submit', function(event){
    event.preventDefault();
  });

  var renderMovieInfo = function(response) {
    var movieInfoDiv = document.getElementsByClassName('infoMovie')[0];
    var titleHeaderElement = document.createElement("h2");
    titleHeaderElement.innerHTML = response.Title;
    movieInfoDiv.appendChild(titleHeaderElement);
    console.log(response.Title);
  };

  var renderMovieGIF = function(response) {

  };

  return {
    renderMovieInfo: renderMovieInfo,
    renderMovieGIF: renderMovieGIF
  }
})();
