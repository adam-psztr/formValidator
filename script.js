const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
};

function showSucces(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
};

function checkEmail(input) {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (re.test(input.value.trim())) {
		showSucces(input);
	} else {
		showError(input, 'Email is not valid')
	}
}

function checkReqired(inputArr) {
	inputArr.forEach(function(input) {
		if(input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSucces(input);
		}
	});
}

function checkLength(input, min, max) {
	if(input.value.length < min) {
		showError(input, `${getFieldName(input)} must be at least ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${getFieldName(input)} must be at less than ${max} characters`);
} else {
	showSucces(input);
} }

function checkPasswordsMatch(input1, input2) {
	if(input1.value !== input2.value) {
		showError(input2, 'Passwords do not match');
	}
}

function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function(e) {
	e.preventDefault();

	checkReqired([username, email, password, password2]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordsMatch(password, password2);

	// if(username.value === '') {
	// 	showError(username, 'Username is required');
	// } else {
	// 	showSucces(username);
	// }

	// if(email.value === '') {
	// 	showError(email, 'Email is required');
	// } else if (!isVaildEmail(email.value)) {
	// 	showError(email, 'Email is not valid');
	// } else {
	// 	showSucces(email);
	// }

	// if(username.value === '') {
	// 	showError(password, 'Password is required');
	// } else {
	// 	showSucces(password);
	// }

	// if(username.value === '') {
	// 	showError(password2, 'Password 2 is required');
	// } else {
	// 	showSucces(password2);
	// }
});