const toogleBtn = document.querySelector('.toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toogleBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
  icons.classList.toggle('active')
});