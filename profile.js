console.log("hello world");

let form = document.querySelector('#contact');

function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("Form submitted successfully!")

}

form.addEventListener('submit', handleSubmit);

function favColor(evt) {
	evt.preventDefault();

	alert("Sunset Orange")

}

color.addEventListener('click', favColor);


function favPlace(evt) {
	evt.preventDefault();

	alert("My Garden")

}

place.addEventListener('click', favPlace);


function favRitual(evt) {
	evt.preventDefault();

	alert("Making a cup of tea")

}

ritual.addEventListener('click', favRitual);


