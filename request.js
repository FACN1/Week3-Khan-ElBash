var Request = (function () {

  var makeRequest = function(method, url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200){
        callback(JSON.parse(xhr.responseText));
      }
    }
    xhr.open(method, url);
    xhr.send();

    // need to implement this
  }

  return {
    makeRequest: makeRequest
  }

})();
