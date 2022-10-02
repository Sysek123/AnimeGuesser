const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-button')
// TODO asd
var answers = ["Full Metal Alchemist Brotherhood","Fire Force","Dororo", "Parasyte", "Baccano", "Blood C", "Blue Period", "Code geass", "Erased", "My hero academia"]
var videoSources = ["files/FMAOP1.mp4","files/FF OP1.mp4", "files/Dororo OP1.mp4", "files/Parasyte OP1.mp4", "files/Baccano OP1.mp4", "files/Blood C OP1.mp4","files/Blue Period OP1.mp4", "files/Code geass OP1.mp4", "files/Erased OP1.mp4", "files/Hero OP1.mp4"]
let choice = []
i = 0

playButton.addEventListener('click', (e) => {
    if(video.paused){
        video.play()
        e.target.textContent = 'Pause'
    } else {
        video.pause()
        e.target.textContent = 'Start'
    }
})

function next (){
    var myVideo = document.getElementsByTagName('video')[0];
    which = Math.round(Math.random() * ((videoSources.length - 1) - 0) + 0) 
    myVideo.src = videoSources[which]
    myVideo.load();
    myVideo.play();
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
  var img = document.createElement("img")
  img.src = "files/okejka.png"
  var tag = document.getElementById("first-slot")
  tag.appendChild(img)
  if (which == 0 && choice[i] == "Full Metal Alchemist Brotherhood" ) { 
    console.log('zgadłeś')
    var img = document.createElement("img")
    img.src = "files/okejka.png"
    var tag = document.getElementById("first-slot")
    tag.appendChild(img)
    i = i +1
  } else if (which == 1 && choice[i] == "Fire Force"){
    console.log('zgadłeś')
    i = i +1
  } else if (which == 2 && choice[i] == "Dororo"){
    console.log('zgadłeś')
    i = i +1
  } else if (which == 3 && choice[i] == "Parasyte"){
    console.log('zgadłeś')
    i = i +1
  } else if (which == 4 && choice[i] == "Baccano"){
    console.log('zgadłeś')
    i = i +1
  } else if (which == 5 && choice[i] == "Blood C"){
    console.log('zgadłeś')
    i = i +1
  } else if (which == 6 && choice[i] == "Blue Period"){
    console.log('zgadłeś')
    i = i +1
  } else if (which == 7 && choice[i] == "Code geass"){
    console.log('zgadłeś')
    i = i +1
  } else if (which == 8 && choice[i] == "Erased"){
    console.log('zgadłeś')
    i = i +1
  } else if (which == 9 && choice[i] == "My hero academia"){
    console.log('zgadłeś')
    i = i +1
  } else {
    console.log('dupa')
  }
}
