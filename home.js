console.log("hello world");

let form = document.querySelector('#contact');

function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("Form submitted successfully!")

}

form.addEventListener('submit', handleSubmit);

function imgCompUser(evt) {
	evt.preventDefault();

	alert("That color looks great on you!")

}

duck.addEventListener('mouseover', imgCompUser)

