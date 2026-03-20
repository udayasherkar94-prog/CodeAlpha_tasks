let songs=[

{
title:"Raj Karega Khalsa",
artist:"Daler Mehndi and Navraj Hans",
src:"songs/song1.mp3",
cover:"images/cover1.jpg"
},

{
title:"Ve Kamleya",
artist:"Asees Version",
src:"songs/song2.mp3",
cover:"images/cover2.jpg"
},

{
title:"Buckle Up",
artist:"Shubh",
src:"songs/song3.mp3",
cover:"images/cover3.jpg"
}

];

let audio=document.getElementById("audio");
let title=document.getElementById("title");
let artist=document.getElementById("artist");
let cover=document.getElementById("cover");
let progress=document.getElementById("progress");
let volume=document.getElementById("volume");
let current=document.getElementById("current");
let duration=document.getElementById("duration");
let playlist=document.getElementById("playlist");
let player=document.querySelector(".player");

let index=0;

/* LOAD SONG */

function loadSong(i){

let song=songs[i];

audio.src=song.src;
title.innerText=song.title;
artist.innerText=song.artist;
cover.src=song.cover;

highlightSong();

}

/* PLAY PAUSE */

function playPause(){

let btn = document.getElementById("playBtn");

if(audio.paused){

audio.play();
btn.innerHTML = "⏸";   // change to pause icon
player.classList.add("playing");

}else{

audio.pause();
btn.innerHTML = "▶";   // change back to play icon
player.classList.remove("playing");

}

}

/* NEXT SONG */

function nextSong(){

index++;

if(index >= songs.length)
index = 0;

loadSong(index);
audio.play();

document.getElementById("playBtn").innerHTML="⏸";
player.classList.add("playing");

}

function prevSong(){

index--;

if(index < 0)
index = songs.length-1;

loadSong(index);
audio.play();

document.getElementById("playBtn").innerHTML="⏸";
player.classList.add("playing");

}

/* PREVIOUS SONG */

function prevSong(){

index--;

if(index<0)
index=songs.length-1;

loadSong(index);
audio.play();

}

/* UPDATE PROGRESS */

audio.addEventListener("timeupdate",()=>{

progress.value=(audio.currentTime/audio.duration)*100;

current.innerText=formatTime(audio.currentTime);

duration.innerText=formatTime(audio.duration);

});

/* SEEK */

progress.addEventListener("input",()=>{

audio.currentTime=(progress.value/100)*audio.duration;

});

/* VOLUME */

volume.addEventListener("input",()=>{

audio.volume=volume.value;

});

/* AUTOPLAY */

audio.addEventListener("ended",()=>{

nextSong();

});

/* TIME FORMAT */

function formatTime(time){

if(isNaN(time)) return "0:00";

let minutes=Math.floor(time/60);
let seconds=Math.floor(time%60);

if(seconds<10) seconds="0"+seconds;

return minutes+":"+seconds;

}

/* PLAYLIST */

songs.forEach((song,i)=>{

let li=document.createElement("li");

li.innerText=song.title+" - "+song.artist;

li.onclick=()=>{

index=i;
loadSong(index);
audio.play();

};

playlist.appendChild(li);

});

/* HIGHLIGHT CURRENT SONG */

function highlightSong(){

let items=document.querySelectorAll("#playlist li");

items.forEach(li=>li.classList.remove("active"));

items[index].classList.add("active");

}

loadSong(index);