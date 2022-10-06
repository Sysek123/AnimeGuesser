const animes = [
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
let choice = []
i = 0

const myArray = animes.map(anime => anime.answer);
animes.sort(function (a, b) {return Math.random() - 0.5;});

function playMusic(){
  var myVideo = document.getElementsByTagName('video')[0];
  myVideo.load();
  var audio = document.getElementById('sound')
  var music = document.getElementById('audioSource');
  music.src = animes[i].sound
  audio.load()
  audio.play();
    }

let lazy = animes.map(anime => anime.answer);
let sortedanswers = lazy.sort();
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
  if (animes[i].answer == choice[i]) {
    var img = document.createElement("img")
    img.src = "files/okejka.png"
    var tag = document.getElementsByClassName("slot")[i]
    tag.appendChild(img)
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.src = animes[i].source
    myVideo.load();
    myVideo.play();
    i = i +1
  } else {
      var img = document.createElement("img")
      img.src = "files/error.png"
      var tag = document.getElementsByClassName("slot")[i]
      tag.appendChild(img)
      var myVideo = document.getElementsByTagName('video')[0];
      myVideo.src = animes[i].source
      myVideo.load();
      myVideo.play();
      i = i +1
    }
  }
 