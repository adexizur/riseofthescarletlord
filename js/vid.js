const video = document.getElementById('my-video');
const playPauseButton = document.querySelector('.play-pause');
const seekBar = document.querySelector('.seek-bar');
const muteButton = document.querySelector('.mute');
const volumeBar = document.querySelector('.volume-bar');
const fullScreenButton = document.querySelector('.full-screen');

function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseButton.classList.add('playing');
  } else {
    video.pause();
    playPauseButton.classList.remove('playing');
  }
}

function updateSeekBar() {
  const percentage = (video.currentTime / video.duration) * 100;
  seekBar.value = percentage;
}

function seekTo(event) {
  const position = (event.offsetX / event.target.offsetWidth) * video.duration;
  video.currentTime = position;
}

function toggleMute() {
  if (video.muted) {
    video.muted = false;
    muteButton.classList.remove('muted');
    volumeBar.value = video.volume;
  } else {
    video.muted = true;
    muteButton.classList.add('muted');
    volumeBar.value = 0;
  }
}

function updateVolume() {
  video.volume = volumeBar.value;
  if (video.volume === 0) {
    muteButton.classList.add('muted');
  } else {
    muteButton.classList.remove('muted');
  }
}

function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    video.requestFullscreen();
  }
}

function skipSeconds(seconds) {
  video.currentTime += seconds;
}

playPauseButton.addEventListener('click', togglePlayPause);
video.addEventListener('play', function() {
  playPauseButton.classList.add('playing');
});
video.addEventListener('pause', function() {
  playPauseButton.classList.remove('playing');
});
video.addEventListener('timeupdate', updateSeekBar);
seekBar.addEventListener('click', seekTo);
muteButton.addEventListener('click', toggleMute);
volumeBar.addEventListener('input', updateVolume);
fullScreenButton.addEventListener('click', toggleFullScreen);
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
    togglePlayPause();
  } else if (event.keyCode === 77) {
    toggleMute();
  } else if (event.keyCode === 37) {
    skipSeconds(-5);
  } else if (event.keyCode === 39) {
    skipSeconds(5);
  }
});
