/* Version 2023.10.04.22.28 */

class Song {
  contructor(name, info, link) {
    this.name = name;
    this.info = info;
    this.link = link;
  }
}

var outros = [
  new Song("Nichijou (All Version Mashup)", "Top tier", "ed/nichijou_ultimate.wav")
];

var currenttrack;

function init() {
  outros = randomizearray(outros);
}

function opstart() {
  document.getElementById("homewrap").style.display = "none";
  document.getElementById("playwrap").style.display = "initial";
}

function edstart() {
  document.getElementById("homewrap").style.display = "none";
  document.getElementById("playwrap").style.display = "initial";
  
  currenttrack = playsound(outros.link);
}

function home() {
  document.getElementById("playwrap").style.display = "none";
  document.getElementById("homewrap").style.display = "initial";
  currenttrack.pause();
}

function playsound(link) {
  var a = new Audio(link);
  a.play();
  return a;
}

function randomizearray(array) {
  var list = [];
  
  for (var x = array.length; x > 0; --x) {
    var ind = randomint(0, x);
    list.push(array[ind]);
    array.splice(ind, 1);
  }
  
  return list;
}

function removeitem(array, item) {
  var index = array.indexOf(item);
  
  if (index > -1) {
    array.splice(index, 1);
  }
}

function randomint(min, max) {
  Math.floor(Math.random() * (max - min) + min);
}
