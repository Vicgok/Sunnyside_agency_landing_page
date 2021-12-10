'use-strict';
const menuBtn = document.querySelector('header nav .menubtn');
const navModal = document.querySelector('header nav .navLinks');

menuBtn.addEventListener('click', () => {
  navModal.classList.toggle('open');
});
