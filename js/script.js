const menuBurger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');
const back = document.querySelector('body');
const menuList = document.querySelector('.menu__list');

menuBurger.onclick = function () {
	menuBurger.classList.toggle('.active');
	menuBody.classList.toggle('.active');
	back.classList.toggle('.lock');
}
menuBody.onclick = function () {
	menuBody.classList.remove('.active');
	back.classList.toggle('.lock')
}