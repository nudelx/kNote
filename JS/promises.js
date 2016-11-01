console.log("heheh");
var api = 'http://swapi.co/api/films/';


var getFilms = function (url) {
  return new Promise(function (yes, no) {

    var res = window.fetch(url).then(function(res) {return res.json()} ).then(function(res) { return res});




  } )

}
