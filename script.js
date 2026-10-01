const card = document.getElementById('card');
const heartsong = document.getElementById('heartsong');
    card.addEventListener('click', () => {
      card.classList.toggle('open');

      if (card.classList.contains('open')) {
        heartsong.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      } else {
        heartsong.pause();
        heartsong.currentTime = 0; // Reset the audio to the beginning when the card is closed
      }
    });