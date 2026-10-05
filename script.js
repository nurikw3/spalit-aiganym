const btnNo = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');

function moveButton() {
  btnNo.classList.add('running');

  const padding = 20;
  const maxX = window.innerWidth - btnNo.offsetWidth - padding;
  const maxY = window.innerHeight - btnNo.offsetHeight - padding;

  const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
  const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
}

btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveButton();
});
btnNo.addEventListener('click', (e) => {
  e.preventDefault();
  moveButton();
});

btnYes.addEventListener('click', () => {
  alert('Спалили');
});
