/* Version 2024.0523.2323:0051 */

var intros = [
  { name: "My Ordinay Life<br>Frist Intro", info: "Top tier", link: "https://jasdtubz.github.io/gta/op/my_ordinary_life_1.wav" },
  { name: "To Love Ru", info: "Top tier", link: "https://jasdtubz.github.io/gta/op/to_love_ru.wav" }
];

var outros = [
  { name: "Miss Kobayashi's Dragon Maid", info: "Great", link: "https://jasdtubz.github.io/gta/ed/miss_kobayashis_dragon_maid.wav" },
  { name: "Nichijou (All Version Mashup)", info: "Top tier", link: "https://jasdtubz.github.io/gta/ed/nichijou_ultimate.wav" }
];

var currenttrack;
var op = null;
var opindex = 0, edindex = 0;

function init() {
  intros = randomizearray(intros);
  outros = randomizearray(outros);
}

function opstart() {
  document.getElementById("homewrap").style.display = "none";
  document.getElementById("playwrap").style.display = "initial";
  
  op = true;
  currenttrack = playsound(intros[opindex].link);
}

function edstart() {
  document.getElementById("homewrap").style.display = "none";
  document.getElementById("playwrap").style.display = "initial";
  
  op = false;
  currenttrack = playsound(outros[edindex].link);
}

function home() {
  document.getElementById("playwrap").style.display = "none";
  document.getElementById("homewrap").style.display = "initial";
  
  op = null;
  reset();
}

function reveal() {
  document.getElementById("reveal").style.fontSize = "25px";
  
  if (op) {
    document.getElementById("reveal").innerHTML = intros[opindex].name;
  } else {
    document.getElementById("reveal").innerHTML = outros[edindex].name;
  }
}

function prev() {
  if (op) {
    if (opindex != 0) {
      reset();
      currenttrack = playsound(intros[--opindex].link);
    }
  } else {
    if (edindex != 0) {
      reset();
      currenttrack = playsound(outros[--edindex].link);
    }
  }
}

function next() {
  if (op) {
    if (opindex != intros.length - 1) {
      reset();
      currenttrack = playsound(intros[++opindex].link);
    }
  } else {
    if (edindex != outros.length - 1) {
      reset();
      currenttrack = playsound(outros[++edindex].link);
    }
  }
}

function reset() {
  document.getElementById("reveal").style.fontSize = "40px";
  document.getElementById("reveal").innerHTML = "Reveal";
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
  return Math.floor(Math.random() * (max - min) + min);
}
