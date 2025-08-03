const musicButton = document.getElementById('musicButton');
const musicIcon = document.getElementById('musicIcon');
const song = document.getElementById('song');

musicButton.addEventListener('click', () => {
  if (song.paused) {
    song.play();
    musicIcon.textContent = '⏸'; // Pause icon
  } else {
    song.pause();
    musicIcon.textContent = '▶'; // Play icon
  }
});
