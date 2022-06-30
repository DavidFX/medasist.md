const modalForm = document.querySelector('#modalForm');

// ! Modal form
modalForm.addEventListener('submit', e => {
	e.preventDefault();
	const phone = document.querySelector('#phone').value;
	const message = `Un utilizator a solicitat ajutor, numărul lui este:`;
	const fill = `~~~~~~~~~~~~~~~`;

	const items = [fill, phone, message];

	items.forEach(item => {
		var url = `https://api.telegram.org/bot5573330058:AAGBQGgsgXu4uWNpOQDfGQ2VIxh7CUH-XBE/sendMessage?chat_id=884422772&text=${item}`;
		var oReq = new XMLHttpRequest();
		oReq.open('GET', url, true);
		oReq.send();
	});

	alert('Mesajul dvs. a fost transmis!');

	document.location.reload();
});
