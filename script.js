"use strict";
const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
  {
    name: "shayad",
    title: "Shayad",
    artist: "ArijitSingh",
  },
  {
    name: "brown_munde",
    title: "Brown Munde",
    artist: "Ap Dhillion",
  },
  {
    name: "kya-baat-ay",
    title: "Kya-Baat-Ay",
    artist: "Karan Aujla",
  },
];

let isPlaying = false;
const playMusic = () => {
  //console.log("hudf")
  music.play();
  isPlaying = true;
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

const pauseMusic = () => {
  //console.log("hudf")
  music.pause();
  isPlaying = false;
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

//Changing the music
const loadSongs = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = `music/${songs.name}.mp3`;
  img.src = `img/${songs.name}.jpg`;
};
let songIndex = 0;

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
