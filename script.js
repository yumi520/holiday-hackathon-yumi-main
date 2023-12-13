const items = document.querySelectorAll(".item");
const boxes = document.querySelectorAll(".box");
// const buttonStart = document.querySelector(".displayItem");
const buttonLanding = document.querySelector(".beginDesign");
const curtains = document.querySelectorAll(".curtain");
const ornaments = document.querySelectorAll(".ornament-item");
const packages = document.querySelectorAll(".package");// packages are unopened and contain the draggable objects
const lights = document.querySelectorAll(".stocking-item");
const tableLocation = document.querySelector(".table-location");

const dragStart = function(evt){
	evt.dataTransfer.setData('text/plain', evt.target.id);
	boxes.forEach((box)=>{
		box.classList.add("drag-locations");
	});
}
const dragEnter = function(evt){
	evt.preventDefault();
	evt.target.classList.add("drag-over");
}

const dragOver = function(evt){
	evt.preventDefault();
	evt.target.classList.add("drag-over");
}

const dragLeave = function(evt){
	evt.target.classList.remove("drag-over");
}
const drop = function(evt){
	boxes.forEach((box)=>{
		box.classList.remove("drag-locations");
	});
	evt.target.classList.remove("drag-over");
	const id = evt.dataTransfer.getData('text/plain');
	const draggable = document.getElementById(id);

	evt.target.appendChild(draggable);

	draggable.classList.remove("hide");
}

// const displayItem = function(evt){
// 	evt.preventDefault();
// 	item.classList.remove("hide");
// 	evt.target.classList.add("hide");
// }

const showMainContainer = function(evt){
	evt.preventDefault();
	const container = document.querySelector(".container");
	container.classList.remove("hide");
	evt.target.classList.add("hide");
}

const toggleCurtain = function(evt){
	console.log("toggle curtain");
	evt.preventDefault();
	curtains.forEach((curtain)=>{
		curtain.classList.toggle("hide");
	});
}

const openPackage = function (evt) {
  const packageClass = evt.target.classList[1];
  const packageNumMatch = packageClass.match(/\d+/); // Extracts the numeric part, original part assumed less than 10 items
  const packageNum = packageNumMatch ? +packageNumMatch[0] : null;

  if (packageNum !== null) {
    const item = document.getElementById(`item-${packageNum}`);
    evt.target.classList.add("hide");
    item.classList.remove("hide");
  } else {
    console.error("Unable to extract package number");
  }
};


boxes.forEach((box) => {
	box.addEventListener("dragenter", dragEnter);
	box.addEventListener("dragover", dragOver);
	box.addEventListener("dragleave", dragLeave);
	box.addEventListener("drop", drop);
});

packages.forEach((package)=>{
	package.addEventListener("click", openPackage);
});


items.forEach((item)=> {
	item.addEventListener("dragstart", dragStart);
	// buttonStart.addEventListener("click", displayItem);
	buttonLanding.addEventListener("click", showMainContainer);
	curtains.forEach((curtain)=>{
		curtain.addEventListener("click", toggleCurtain);
	});
});



// music player section**********************
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
 
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
 
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
 
// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;
 
// Create the audio element for the player
let curr_track = document.createElement('audio');
 
// Define the list of tracks that have to be played
let track_list = [
  {
    name: "All I Want For Christmas Is You",
    artist: "Mariah Carey",
    image: "https://i.scdn.co/image/ab67616d0000b2734246e3158421f5abb75abc4f",
    path: "songs/All_I_Want_For_Christmas_Is_You.mp3"
  },
  {
    name: "Last Christmas",
    artist: "Wham!",
    image: "data:image/jpeg;base64,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",
    path: "songs/Wham_Last_Christmas.mp3"
  },
  {
    name: "Santa Tell Me",
    artist: "Ariana Grande",
    image: "https://images.genius.com/7d22404eff20f3b66da1a1c19e351428.1000x1000x1.jpg",
    path: "songs/Ariana_Grande_Santa_Tell_Me.mp3",
  },
];
const loadTrack = function (track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();
 
  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();
 
  // Update details of the track
  track_art.style.backgroundImage = 
     "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
 
  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);
 
  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);
}
 
// Function to reset all values to their default
const resetValues = function() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}
const playpauseTrack = function() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
}
 
const playTrack = function() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;
 
  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
}
 
const pauseTrack = function() {
  // Pause the loaded track
  curr_track.pause();
  isPlaying = false;
 
  // Replace icon with the play icon
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
}
 
const nextTrack = function() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
 
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}
 
const prevTrack = function() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length - 1;
   
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}

const seekTo = function() {
  // Calculate the seek position by the
  // percentage of the seek slider 
  // and get the relative duration to the track
  let seekto = curr_track.duration * (seek_slider.value / 100);
 
  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
}
 
const setVolume = function() {
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = volume_slider.value / 100;
}
 
const seekUpdate = function() {
  let seekPosition = 0;
 
  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;
 
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
 
    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
 
    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
loadTrack(track_index);
