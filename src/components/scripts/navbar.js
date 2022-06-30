const burger = document.querySelector('#burgerMenu');
const nav = document.querySelector('#mySidenav');
const close = document.querySelector('#closeNav');
const service = document.querySelector('#service');

let active = false;

function activeNav() {
	active = !active;
	if (active) {
		nav.style.width = '100vw';
	} else {
		nav.style.width = '0px';
	}
}

burger.addEventListener('click', activeNav);
close.addEventListener('click', activeNav);
service.addEventListener('click', activeNav);
