const hamburger = document.querySelector('.header .nav-bar .nav-list .hamberger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header .container')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});