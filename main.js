document.querySelector('button').addEventListener('click', function(event){
  event.preventDefault();
  var searchQuery  = document.querySelector('input').value;
  Request.makeRequest(
    'GET',
    'http://www.omdbapi.com/?t='+searchQuery,
     Render.renderMovieInfo
  );

});
