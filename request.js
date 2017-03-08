var Request = (function () {

  var makeRequest = function(method, url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200){
        callback(null, JSON.parse(xhr.responseText));
      }
      else if (xhr.status > 399 && xhr.status < 500) {
        var errorMessage = "Client Error! Status: " + xhr.status;
        callback(errorMessage, null);
      }
      else if (xhr.status > 499 && xhr.status < 600){
        var errorMessage = "Server Error! Status: " + xhr.status;
        callback(errorMessage, null);
      }
    }
    xhr.open(method, url);
    xhr.send();

  }

  return {
    makeRequest: makeRequest
  }

})();
