console.log("Form Validation");

const form = document.getElementById('registration');
const username = form.elements.username;
const email = form.elements.email;
const password = form.elements.password;
const passwordCheck = form.elements.passwordCheck;
const terms = form.elements.terms;

const errorDisplay = document.getElementById('Error Display');

// displaying errors
function showError(message) {
     errorDisplay.innerHTML = message;
     errorDisplay.style.display = "block";
}

// hiding errors
function hideError() {
     errorDisplay.style.display = "none";
}

// registration form validation
form.addEventListener('submit', function(e) {
     e.preventDefault();
});
