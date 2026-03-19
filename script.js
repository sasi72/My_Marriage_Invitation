/* ---- Floating petals ---- */
const petalColors = ['#e8a0a0', '#c9a96e', '#d4a0c0', '#f0d9a8'];
for (let i = 0; i < 22; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  const size = 6 + Math.random() * 10;
  p.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random() * 100}vw;
    background:${petalColors[Math.floor(Math.random() * petalColors.length)]};
    animation-duration:${8 + Math.random() * 12}s;
    animation-delay:-${Math.random() * 15}s;
  `;
  document.body.appendChild(p);
}

/* ---- Nav toggle ---- */
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeNav() {
  document.getElementById('navLinks').classList.remove('open');
}

/* ---- Scroll reveal ---- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.intersectionRatio >= 0.10) {
      e.target.classList.add('visible');      /* enter → animate in  */
    } else if (e.intersectionRatio === 0) {
      e.target.classList.remove('visible');   /* fully left → reset  */
    }
  });
}, { threshold: [0, 0.10] });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ---- Countdown ---- */
const weddingDate = new Date('2026-05-29T09:30:00');

function updateCountdown() {
  const diff = weddingDate - new Date();
  if (diff <= 0) {
    ['days', 'hours', 'mins', 'secs'].forEach(k => {
      document.getElementById('cd-' + k).textContent = '00';
    });
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-days').textContent  = String(d).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
  document.getElementById('cd-mins').textContent  = String(m).padStart(2, '0');
  document.getElementById('cd-secs').textContent  = String(s).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ---- Download Invitation as HTML file ---- */

function downloadInvitation() {
  // 1. Path to your PNG file in the assets folder
  const filePath = './assets/Sasi_Lavs_Wedding_Invitation.png'; 
  
  // 2. Create a temporary anchor element
  const a = document.createElement('a');
  a.href = filePath;
  
  // 3. Set the name you want the file to have when saved
  a.download = 'Sasi_Lavs_Wedding_Invitation.png';
  
  // 4. Trigger the download
  document.body.appendChild(a);
  a.click();
  
  // 5. Cleanup
  document.body.removeChild(a);
}

/* ---- Sparkle on click ---- */
document.addEventListener('click', function (e) {
  const colors = ['#c9a96e', '#e8a0a0', '#f0d9a8', '#fff', '#d4a0c0'];
  for (let i = 0; i < 8; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    const angle = (Math.PI * 2 / 8) * i;
    const dist = 30 + Math.random() * 30;
    s.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    s.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
    s.style.left = e.clientX + 'px';
    s.style.top  = e.clientY + 'px';
    s.style.background = colors[Math.floor(Math.random() * colors.length)];
    s.style.animationDelay = Math.random() * 0.15 + 's';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 900);
  }
});
