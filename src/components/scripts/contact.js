const contactForm = document.querySelector('#contactForm');

console.log(
	'let url = `https://api.telegram.org/bot5573330058:AAGBQGgsgXu4uWNpOQDfGQ2VIxh7CUH-XBE/sendMessage?chat_id=884422772&text=${message}`;'
);

contactForm.addEventListener('submit', e => {
	e.preventDefault();

	const u_name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	let message = document.getElementById('message').value;

	const fill = `~~~~~~~~~~~~~~~`;

	const items = [fill, u_name, email, message];

	for (let i = 0; i < items.length; i++) {
		let url = `https://api.telegram.org/bot5573330058:AAGBQGgsgXu4uWNpOQDfGQ2VIxh7CUH-XBE/sendMessage?chat_id=884422772&text=${items[i]}`;
		const oReq = new XMLHttpRequest();
		oReq.open('GET', url, true);
		oReq.send();
	}

	alert('Mesajul dvs a fost transmis!');
	document.location.reload();
});
