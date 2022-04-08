const button = document.getElementById("btn");
button.addEventListener("click", function checkEmail() {
	const inputEmail = document.getElementById("email");
	const feedback = document.getElementById("feedback");
	const error = document.getElementById("error");
	const Validation =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (inputEmail.value == "" || !Validation.test(inputEmail.value)) {
		feedback.textContent = "Please provide a valid email";
		inputEmail.style.border = "2px solid red";
		error.style.display = "block";
	} else {
		error.style.display = "none";
        inputEmail.value = ""
		feedback.textContent = "";
		inputEmail.style.border = "1px solid hsl(0, 36%, 70%)";
	}
});
