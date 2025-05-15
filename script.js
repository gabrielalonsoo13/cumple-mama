// Reproduce un solo audio a la vez
document.addEventListener("DOMContentLoaded", () => {
  const audios = document.querySelectorAll("audio");

  audios.forEach(audio => {
    audio.addEventListener("play", () => {
      audios.forEach(other => {
        if (other !== audio) {
          other.pause();
          other.currentTime = 0;
        }
      });
    });
  });

  // Aplica clase 'fade-in' a todos los elementos visibles
  const fadeIns = document.querySelectorAll('.gallery img, .audio-item');
  fadeIns.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.2}s`;
    el.classList.add('fade-in');
  });
});
