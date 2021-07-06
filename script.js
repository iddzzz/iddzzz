const burgerMenu = document.querySelector('.burger-menu input');
const navHeader = document.querySelector('header .site-nav');

burgerMenu.addEventListener('click', function(){
	navHeader.classList.toggle('slide');
});