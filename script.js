document.documentElement.classList.add('js');

const petals = document.querySelector('.petals');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('span');
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDuration = 8 + Math.random() * 8 + 's';
  p.style.animationDelay = -Math.random() * 16 + 's';
  p.style.setProperty('--size', 6 + Math.random() * 6 + 'px');
  petals.append(p);
}

const watcher = new IntersectionObserver(items => {
  items.forEach(item => {
    if (item.isIntersecting) item.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => watcher.observe(el));

if (location.protocol.startsWith('http')) {
  const page = encodeURIComponent(location.href.split('#')[0]);
  document.getElementById('val-html').href = 'https://validator.w3.org/nu/?doc=' + page;
  document.getElementById('val-css').href = 'https://jigsaw.w3.org/css-validator/validator?uri=' + page + '&profile=css3svg&usermedium=all&warning=1&lang=cs';
}