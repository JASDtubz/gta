/* Version 2024.0529.0000:0051 */

var intros = [
  { name: "My Ordinay Life<br>Frist Intro", info: "Tier S", link: "https://jasdtubz.github.io/gta/op/my_ordinary_life_1.wav", reveal: false},
  { name: "My Senpai Is Annoying", info: "Tier A", link: "https://jasdtubz.github.io/gta/op/my_senpai_is_annoying.wav", reveal: false},
  { name: "To Love Ru", info: "Tier S", link: "https://jasdtubz.github.io/gta/op/to_love_ru.wav", reveal: false }
];

var outros = [
  //{ name: "Nichijou (All Version Mashup)", info: "Tier S", link: "https://jasdtubz.github.io/gta/ed/nichijou_ultimate.wav", reveal: false },
  { name: "Made In Abyss", info: "Tier A", link: "https://jasdtubz.github.io/gta/ed/made_in_abyss.wav", reveal: false}, //Make my own
  { name: "Miss Kobayashi's Dragon Maid", info: "Tier A", link: "https://jasdtubz.github.io/gta/ed/miss_kobayashis_dragon_maid.wav", reveal: false },
  { name: "My Senpai Is Annoying", info: "Tier B", link: "https://jasdtubz.github.io/gta/ed/my_senpai_is_annoying.wav", reveal: false },
];

// artist namem title, my opion

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
  if (op) {
    if (!intros[opindex].reveal) {
      document.getElementById("reveal").innerHTML = intros[opindex].name;
      intros[opindex].reveal = true;
    } else {
      document.getElementById("reveal").innerHTML = "Reveal";
      intros[opindex].reveal = false;
    }
  } else {
    if (!outros[edindex].reveal) {
      document.getElementById("reveal").innerHTML = outros[edindex].name;
      outros[edindex].reveal = true;
    } else {
      document.getElementById("reveal").innerHTML = "Reveal";
      outros[edindex].reveal = false;
    }
  }
}

function prev() {
  if (op) {
    if (opindex != 0) {
      --opindex;
      reset();
      currenttrack = playsound(intros[opindex].link);
    }
  } else {
    if (edindex != 0) {
      --edindex;
      reset();
      currenttrack = playsound(outros[edindex].link);
    }
  }
}

function next() {
  if (op) {
    if (opindex != intros.length - 1) {
      ++opindex;
      reset();
      currenttrack = playsound(intros[opindex].link);
    }
  } else {
    if (edindex != outros.length - 1) {
      ++edindex;
      reset();
      currenttrack = playsound(outros[edindex].link);
    }
  }
}

function reset() {
  if (op) {
    if (!intros[opindex].reveal) {
      document.getElementById("reveal").innerHTML = "Reveal";
    } else {
      document.getElementById("reveal").innerHTML = intros[opindex].name;
    }
  } else {
    if (!outros[edindex].reveal) {
      document.getElementById("reveal").innerHTML = "Reveal";
    } else {
      document.getElementById("reveal").innerHTML = outros[edindex].name;
    }
  }
  
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
