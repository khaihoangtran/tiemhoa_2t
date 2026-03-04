const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
const countdownEl = document.querySelector('.countdown');

function formatNumber(value) {
  return String(value).padStart(2, '0');
}

function updateCountdown() {
  if (!countdownEl || !dayEl || !hourEl || !minuteEl || !secondEl) {
    return;
  }

  const deadline = countdownEl.getAttribute('data-deadline');
  if (!deadline) {
    return;
  }

  const timeLeft = new Date(deadline).getTime() - Date.now();

  if (timeLeft <= 0) {
    dayEl.textContent = '00';
    hourEl.textContent = '00';
    minuteEl.textContent = '00';
    secondEl.textContent = '00';
    return;
  }

  const day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hour = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((timeLeft / (1000 * 60)) % 60);
  const second = Math.floor((timeLeft / 1000) % 60);

  dayEl.textContent = formatNumber(day);
  hourEl.textContent = formatNumber(hour);
  minuteEl.textContent = formatNumber(minute);
  secondEl.textContent = formatNumber(second);
}

const revealItems = document.querySelectorAll('.reveal');
if (revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

updateCountdown();
setInterval(updateCountdown, 1000);
