const anime = [
  { answer : 'Full Metal Alchemist Brotherhood', source : 'files/FMAOP1.mp4', sound : 'files/fma sound.mp4'},
  { answer : 'Fire Force', source : 'files/FF OP1.mp4', sound : 'files/fire force sound.mp4'},
  { answer : 'Dororo', source : 'files/Dororo OP1.mp4', sound : 'files/dororo sound.mp4'},
  { answer : 'Parasyte', source : 'files/Parasyte OP1.mp4', sound : 'files/parasyte sound.mp4'},
  { answer : 'Baccano', source : 'files/Baccano OP1.mp4', sound : 'files/baccano sound.mp4'},
  { answer : 'Blood C', source : 'files/Blood C OP1.mp4', sound : 'files/blood c sound.mp4'},
  { answer : 'Blue Period', source : 'files/Blue Period OP1.mp4', sound : 'files/blue period sound.mp4'},
  { answer : 'Code geass', source : 'files/Code geass OP1.mp4', sound : 'files/code geass sound.mp4'},
  { answer : 'Erased', source : 'files/Erased OP1.mp4', sound : 'files/erased sound.mp4'},
  { answer : 'My hero academia', source : 'files/Hero OP1.mp4', sound : 'files/my hero sound.mp4'},
]

var allanswers = ['Full Metal Alchemist Brotherhood','Fire Force','Dororo', 'Parasyte', 'Baccano', 'Blood C', 'Blue Period', 'Code geass', 'Erased', 'My hero academia']
var answers = ['Full Metal Alchemist Brotherhood','Fire Force','Dororo', 'Parasyte', 'Baccano', 'Blood C', 'Blue Period', 'Code geass', 'Erased', 'My hero academia']
var videoSources = ['files/FMAOP1.mp4','files/FF OP1.mp4', 'files/Dororo OP1.mp4', 'files/Parasyte OP1.mp4', 'files/Baccano OP1.mp4', 'files/Blood C OP1.mp4','files/Blue Period OP1.mp4', 'files/Code geass OP1.mp4', 'files/Erased OP1.mp4', 'files/Hero OP1.mp4']
var sounds = ['files/fma sound.mp4','files/fire force sound.mp4', 'files/dororo sound.mp4', 'files/parasyte sound.mp4', 'files/baccano sound.mp4', 'files/blood c sound.mp4','files/blue period sound.mp4', 'files/code geass sound.mp4', 'files/erased sound.mp4', 'files/my hero sound.mp4' ]
let choice = []
i = 0


//anime.sort(function (a, b) {return Math.random() - 0.5;});

function shuffle_two_arrays_identically(videoSources, sounds){
  "use strict";
  var l = videoSources.length,
      i = 0,
      rnd,
      tmp1,
      tmp2;
  
  while (i < l) {
      rnd = Math.round(Math.random() * i)
      tmp1 = videoSources[i]
      tmp2 = sounds[i]
      videoSources[i] = videoSources[rnd]
      sounds[i] = sounds[rnd]
      videoSources[rnd] = tmp1
      sounds[rnd] = tmp2
      i += 1
  }}

function playMusic(){
  var myVideo = document.getElementsByTagName('video')[0];
  myVideo.load();
  var audio = document.getElementById('sound')
  var music = document.getElementById('audioSource');
  music.src = sounds[i]
  audio.load()
  audio.play();
  }

let sortedanswers = answers.sort();
let input = document.getElementById("input");
input.addEventListener("keyup", (e) => {
  removeElements();
  for (let i of sortedanswers) {
    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayanswers('" + i + "')");
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});
function displayanswers(x) {
  value = x
  input.value = value
  removeElements();
}
function removeElements() {
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}


function check() {
  choice.push(value)
  var audio = document.getElementById('sound')
  audio.load()
  if (videoSources[i] == "files/FMAOP1.mp4" && choice[i] == "Full Metal Alchemist Brotherhood" ) { 
    console.log('zgadłeś')
    var img = document.createElement("img")
    img.src = "files/okejka.png"
    var tag = document.getElementsByClassName("slot")[i]
    tag.appendChild(img)
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = videoSources[i]
    myVideo.load();
    myVideo.play();
    i = i +1
  } else if (videoSources[i] == "files/FF OP1.mp4" && choice[i] == "Fire Force"){
    console.log('zgadłeś')
    var img = document.createElement("img")
    img.src = "files/okejka.png"
    var tag = document.getElementsByClassName("slot")[i]
    tag.appendChild(img)
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = videoSources[i]
    myVideo.load();
    myVideo.play();
    i = i +1
  } else if (videoSources[i] == "files/Dororo OP1.mp4" && choice[i] == "Dororo"){
    console.log('zgadłeś')
    var img = document.createElement("img")
    img.src = "files/okejka.png"
    var tag = document.getElementsByClassName("slot")[i]
    tag.appendChild(img)
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = videoSources[i]
    myVideo.load();
    myVideo.play();
    i = i +1
  } else if (videoSources[i] == "files/Parasyte OP1.mp4" && choice[i] == "Parasyte"){
    console.log('zgadłeś')
    var img = document.createElement("img")
    img.src = "files/okejka.png"
    var tag = document.getElementsByClassName("slot")[i]
    tag.appendChild(img)
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = videoSources[i]
    myVideo.load();
    myVideo.play();
    i = i +1
  } else if (videoSources[i] == "files/Baccano OP1.mp4" && choice[i] == "Baccano"){
    console.log('zgadłeś')
    var img = document.createElement("img")
    img.src = "files/okejka.png"
    var tag = document.getElementsByClassName("slot")[i]
    tag.appendChild(img)
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = videoSources[i]
    myVideo.load();
    myVideo.play();
    i = i +1
  } else if (videoSources[i] == "files/Blood C OP1.mp4" && choice[i] == "Blood C"){
    console.log('zgadłeś')
    var img = document.createElement("img")
    img.src = "files/okejka.png"
    var tag = document.getElementsByClassName("slot")[i]
    tag.appendChild(img)
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = videoSources[i]
    myVideo.load();
    myVideo.play();
    i = i +1
  } else if (videoSources[i] == "files/Blue Period OP1.mp4" && choice[i] == "Blue Period"){
    console.log('zgadłeś')
    var img = document.createElement("img")
    img.src = "files/okejka.png"
    var tag = document.getElementsByClassName("slot")[i]
    tag.appendChild(img)
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = videoSources[i]
    myVideo.load();
    myVideo.play();
    i = i +1
  } else if (videoSources[i] == "files/Code geass OP1.mp4" && choice[i] == "Code geass"){
    console.log('zgadłeś')
    var img = document.createElement("img")
    img.src = "files/okejka.png"
    var tag = document.getElementsByClassName("slot")[i]
    tag.appendChild(img)
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = videoSources[i]
    myVideo.load();
    myVideo.play();
    i = i +1
  } else if (videoSources[i] == "files/Erased OP1.mp4" && choice[i] == "Erased"){
    console.log('zgadłeś')
    var img = document.createElement("img")
    img.src = "files/okejka.png"
    var tag = document.getElementsByClassName("slot")[i]
    tag.appendChild(img)
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = videoSources[i]
    myVideo.load();
    myVideo.play();
    i = i +1
  } else if (videoSources[i] == "files/Hero OP1.mp4" && choice[i] == "My hero academia"){
    console.log('zgadłeś')
    var img = document.createElement("img")
    img.src = "files/okejka.png"
    var tag = document.getElementsByClassName("slot")[i]
    tag.appendChild(img)
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = videoSources[i]
    myVideo.load();
    myVideo.play();
    i = i +1
  } else {
    console.log('dupa')
    var img = document.createElement("img")
    img.src = "files/error.png"
    var tag = document.getElementsByClassName("slot")[i]
    tag.appendChild(img)
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = videoSources[i]
    myVideo.load();
    myVideo.play();
    i = i +1
  }
}
