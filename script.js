console.log("Form Validation");

const form = document.getElementById('registration');
const username = form.elements.username;
const email = form.elements.email;
const password = form.elements.password;
const passwordCheck = form.elements.passwordCheck;
const terms = form.elements.terms;

const errorDisplay = document.getElementById('Error Display');

form.addEventListener('submit', function(e) {
     e.preventDefault();
});