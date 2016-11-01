var url = 'http://swapi.co/api/films/';
var cb  = function () { console.log('I am a callback !!', arguments)}

var getFilmsWithPromise = function (url) {
  return new Promise(function (yes, no) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.readyState == XMLHttpRequest.DONE && this.status === 200) {
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
}

function theBadAndUgly () {
  
  var t = [
    { url, cb },
    { url: url+'dddddd', cb },
    {url} ].map((item) => {
      getFilmsWithCallback(item.url, item.cb)
    })

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

}

//
// var whenDataLoaded = getFilmsWithPromise(url)
//
// whenDataLoaded.then(function(data) { console.log(data)})

// var t = [ { url }, { url: url+'dddddd' } ].map((item) => {
//   getFilmsWithPromise(item.url)
//     .then(function(){ console.log("data !!!")})
//     .catch(function(){ console.log("error !!!")})
// })

// Promise.all([getFilmsWithPromise(url+1), getFilmsWithPromise(url+2), getFilmsWithPromise(url+3), getFilmsWithPromise(url+4)])
// .then(function(d) {console.log(d)})
var res  = ""
getFilmsWithPromise(url+1)
.then(function (d) { res += JSON.parse(d).title; return getFilmsWithPromise(url+2) })
.then(function (d) { res += JSON.parse(d).title; return getFilmsWithPromise(url+3) })
.then(function (d) { res += JSON.parse(d).title; return getFilmsWithPromise(url+4) })
.then(function (d) { res += JSON.parse(d).title; console.log("Done  =>>>> ",  res)})
