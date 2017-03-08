document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  var searchQuery  = document.querySelector('input').value;

  Request.makeRequest(
    'GET',
    'http://www.omdbapi.com/?t=' + searchQuery,
     Render.renderMovieInfo
  );

  Request.makeRequest(
    'GET',
    'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + searchQuery,
    Render.renderMovieGIF
  );

});
