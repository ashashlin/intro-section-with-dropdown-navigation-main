const openNavBtn = document.querySelector('.js-header__nav-toggle');
const nav = document.querySelector('.header__nav');
const closeNavBtn = document.querySelector('.js-header__nav-close-btn');

openNavBtn.addEventListener('click', () => {
  nav.classList.add('active');
});

closeNavBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});
