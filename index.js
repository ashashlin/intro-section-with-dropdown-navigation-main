const openNavBtn = document.querySelector('.js-header__nav-toggle');
const nav = document.querySelector('.header__nav');
const closeNavBtn = document.querySelector('.js-header__nav-close-btn');
const navDropdownBtns = document.querySelectorAll('.js-header__nav-dropdown-btn');
const navDropdownLists = document.querySelectorAll('.js-header__nav-dropdown-list');

openNavBtn.addEventListener('click', () => {
  nav.classList.add('active');
});

closeNavBtn.addEventListener('click', () => {
  nav.classList.remove('active');

  navDropdownLists.forEach((list) => {
    if (list.classList.contains('active')) {
      list.classList.toggle('active');
    }
  });

  navDropdownBtns.forEach((button) => {
    if (button.classList.contains('rotate')) {
      button.classList.toggle('rotate');
    }
  });
});

navDropdownBtns.forEach((button) => {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.toggle('active');

    button.classList.toggle('rotate');
  });
});
