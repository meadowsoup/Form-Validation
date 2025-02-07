console.log("Form Validation");

const form = document.getElementById('registration');
const username = form.elements.username;
const email = form.elements.email;
const password = form.elements.password;
const passwordCheck = form.elements.passwordCheck;
const terms = form.elements.terms;

const errorDisplay = document.getElementById('Error Display');

//* displaying errors
function showError(message) {
     errorDisplay.innerHTML = message;
     errorDisplay.style.display = "block";
}

//* hiding errors
function hideError() {
     errorDisplay.style.display = "none";
}

//* registration form validation
form.addEventListener('submit', function(e) {
     e.preventDefault();
});

//* focus on input field with error
function focusOnError(inputEle) {
     inputEle.focus();
}

//* reset errors
hideError();

//* validate user
if (username.value.trim() === "") {
     showError("Username no blank!");
     focusOnError(username);
     return;
}
if (username.value.length < 4) {
     showError("Username has got to AT LEAST be 4 chars long bruh 🙄");
     focusOnError(username);
     return;
}
if (!/^[A-Za-z0-9]+$/.test(username.value)) {
     showError("No special chars or whitespaces in username dummy 🤦🏽‍♂️!");
     focusOnError(username);
     return;
}
if (new Set(username.value).size < 2) {
     showError("At least 2 unique chars in username 🙏🏽");
     focusOnError(username);
     return;
}

//* email validation
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
     showError("Valid email plz! 😤");
     return;
}
if (email.value.toLowerCase().endsWith("@ex.com")) {
     showError("Email can't be from 'ex.com' domain btw...");
     focusOnError(email);
     return;
}

//* validating password
if (password.value.length < 12) {
     showError("Password must be at least 12 characters long.");
     focusOnError(password);
     return;
}
if (!/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value)) {
     showError("At least one uppercase and lowercase letter 😐");
     focusOnError(password);
     return;
}
if (!/\d/.test(password.value)) {
     showError("at least 1 #.");
     focusOnError(password);
     return;
}
if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password.value)) {
     showError("password must contain at least 1 special character.");
     focusOnError(password);
     return;
}
if (/password/i.test(password.value)) {
     showError("cannot contain 'password' 😑...");
     focusOnError(password);
     return;
}
if (password.value.toLowerCase().includes(username.value.toLowerCase())) {
     showError("cannot contain the username 👹");
     focusOnError(password);
     return;
}
if (password.value !== passwordCheck.value) {
     showError("Doesn't match!");
     focusOnError(password);
     return;
}

//* validate terms and conditions
if (!terms.checked) {
     showError("Agree to the terms 😈");
     focusOnError(terms);
     return;
}