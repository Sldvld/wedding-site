// Countdown
const countdown = document.getElementById("countdown");
const weddingDate = new Date("2025-09-22T12:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    countdown.innerHTML = "Вітаємо! Сьогодні наш день 💍";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days} днів ${hours} год ${minutes} хв ${seconds} сек`;
}

const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const favSong = document.getElementById("favSong");
let isPlaying = false;

if (playBtn && favSong) {
  playBtn.addEventListener("click", () => {
    if (!isPlaying) {
      favSong.play();
      playIcon.style.display = "none";
      pauseIcon.style.display = "inline";
    } else {
      favSong.pause();
      playIcon.style.display = "inline";
      pauseIcon.style.display = "none";
    }
    isPlaying = !isPlaying;
  });
}
// Scroll animation
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 }
);

faders.forEach((el) => observer.observe(el));
