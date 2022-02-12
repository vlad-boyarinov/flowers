let menuBtn = document.querySelector('.header__navigation__burger');
let menu = document.querySelector('.header__navigation__menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});
