const backButton = document.getElementById('backButton');
const closeButton = document.getElementById('closeButton');
const paperBall = document.getElementById('paperBall');
const paperUnfolded = document.getElementById('paperUnfolded');
const babi = document.getElementById('babi');
const speech = document.getElementById('speechBubble');
const afterGif = document.getElementById('afterGif');
const nextButton = document.getElementById('nextButton');

paperBall.addEventListener('click', () => {
  paperBall.style.display = 'none';
  babi.style.display = 'none';
  speech.style.display = 'none';

  paperUnfolded.style.display = 'block';
  backButton.style.display = 'inline-block';
  closeButton.style.display = 'inline-block';
});

backButton.addEventListener('click', () => {
  paperUnfolded.style.display = 'none';
  backButton.style.display = 'none';
  closeButton.style.display = 'none';

  paperBall.style.display = 'block';
  babi.style.display = 'block';
  speech.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  paperUnfolded.style.display = 'none';
  backButton.style.display = 'none';
  closeButton.style.display = 'none';

  // Show gif and next button
  afterGif.style.display = 'block';
  nextButton.style.display = 'inline-block';
});

// Redirect to memory.html on next button click
nextButton.addEventListener('click', () => {
  window.location.href = "memory.html";
});

