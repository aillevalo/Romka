// Heart scale
const heart = document.querySelector('.heart');
let scale = parseFloat(localStorage.getItem('heartScale')) || 1.0;
scale += 0.05;
heart.style.transform = `scale(${scale})`;
localStorage.setItem('heartScale', scale);

// Button show after typing
const message = document.querySelector('.message');
const nextButton = document.querySelector('.next-button');

message.addEventListener('animationend', (e) => {
  if (e.animationName === 'typing') {
    nextButton.style.display = 'inline-block';
  }
});
