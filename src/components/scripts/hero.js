import Typed from 'typed.js';

const modalBtn = document.querySelector('#modalBtn');
const modal = document.querySelector('#modal');
const toType = document.querySelector('#toType');
const closeMod = document.querySelector('#closeMod');
const modWindow = document.querySelector('#modWindow');

// ! Type animation
var options = {
	strings: ['calitativ', 'operativ ', 'cu plăcere ^1000'],
	typeSpeed: 60,
	smartBackspce: true,
	loop: true,
	loopCount: Infinity,
};

var typed = new Typed('#toType', options);

// ! Modal window
modalBtn.addEventListener('click', () => {
	modal.style.display = 'flex';
	modal.style.opacity = '100%';
	modWindow.style.width = '75%';
});

closeMod.addEventListener('click', () => {
	modal.style.display = 'none';
	modal.style.opacity = '0';
	modWindow.style.width = '0';
});
