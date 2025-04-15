 // Dark mode toggle
 const toggleBtn = document.getElementById('themeToggle');
 toggleBtn.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
   toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
 });

 // Hero animated text
 const texts = document.querySelectorAll('.animated-text span');
 let index = 0;
 function rotateText() {
   texts.forEach(t => t.classList.remove('active'));
   texts[index].classList.add('active');
   index = (index + 1) % texts.length;
 }
 setInterval(rotateText, 3000);
 rotateText();

