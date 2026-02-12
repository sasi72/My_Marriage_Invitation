const quotes = [
  {
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
  },
  {
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn",
  },
  {
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls.",
    author: "Maya Angelou",
  },
  {
    text: "You are my today and all of my tomorrows.",
    author: "Leo Christopher",
  },
];

const countdownTarget = new Date("2026-06-20T16:30:00");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

let quoteIndex = 0;

function renderQuote() {
  const quote = quotes[quoteIndex];
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

function cycleQuote(direction) {
  quoteIndex = (quoteIndex + direction + quotes.length) % quotes.length;
  renderQuote();
}

function updateCountdown() {
  const now = new Date();
  const diff = countdownTarget - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = String(days);
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}


document.getElementById("prevQuote").addEventListener("click", () => cycleQuote(-1));
document.getElementById("nextQuote").addEventListener("click", () => cycleQuote(1));

renderQuote();
updateCountdown();
setInterval(updateCountdown, 1000);

const revealTargets = document.querySelectorAll(
  ".scroll-reveal, .page > section, .timeline-item"
);
revealTargets.forEach((target) => target.classList.add("scroll-reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealTargets.forEach((target) => revealObserver.observe(target));
