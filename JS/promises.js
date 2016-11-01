var url = 'http://swapi.co/api/films/';
var cb  = function () { console.log('I am a callback !!', arguments)}

var getFilmsWithCallback = function (url) {
  return new Promise(function (yes, no) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        debugger
          yes(xhr.response)
      } else {
          no("jopa")
      }
    }
    xhr.open('GET', url, true);
    xhr.send(null);
  })
}


var getFilmsWithCallback = function (url,cb) {
  return new Promise(function (yes, no) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.readyState == XMLHttpRequest.DONE && this.status === 200) {
        if( typeof cb === 'function') { cb(xhr.response) }
          else { console.warn("No callback found")}
      } else {
          console.error("XHR error "+ this.status + " " + xhr.statusText )
      }
    }

    xhr.open('GET', url, true);
    xhr.send(null);
  })
}

var t = [ { url, cb }, { url: url+'dddddd', cb }, {url} ].map((item) => { getFilmsWithCallback(item.url, item.cb) })

getFilmsWithCallback(url+"1", function(text1) {
  console.log("one")
  getFilmsWithCallback(url+"2", function(text2) {
    console.log("two")
    getFilmsWithCallback(url+"3", function(text3) {
      console.log("tree")
      getFilmsWithCallback(url+"4", function(text4) {
        console.log( "Yes !!! we got the movies !!!  => "
        + JSON.parse(text1).title + " | "
        + JSON.parse(text2).title + " | "
        + JSON.parse(text3).title + " | "
        + JSON.parse(text4).title
        //TODO :: add error handeling :)  
       )
      })
    })
  })
})
