const form = document.forms['myForm'];
const usernameInput = form['username'];
const emailInput = form['email'];
const passwordInput = form['password'];
const confirmPasswordInput = form['confirmation'];
const messages = document.querySelectorAll('.msg');
messages.forEach(msg => {
    msg.textContent = "";
   // msg.parentElement.classList.remove('error', 'success');
});


form.addEventListener('input', function(event) {
    const target = event.target; 
    event.preventDefault();
    if (target.id === 'username') {
        validateUsername(target);
    } else if (target.id === 'email') {
        validateEmail(target);
    } else if (target.id === 'password') {
        validatePassword(target);
    } else if (target.id === 'confirmation') {
        validatePasswordConfirmation(target);
    }
});
function validateUsername(usernameInput) {
    const username = usernameInput.value;
    const msg = usernameInput.nextElementSibling;

    if (username.length < 5  || username.length > 10  || username !== username.toLowerCase()) {
        msg.textContent = "Username must be 5-10 lowercase letters.";
        msg.style.display = 'block';
        messages[0].style.color = 'red';
    } else {
        msg.textContent = "Valid username!";
        msg.style.display = 'block';
        messages[0].style.color = 'green';
    }
}

function validateEmail(emailInput) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    const msg = emailInput.nextElementSibling;

    if (!emailInput.value.match(emailRegex)) {
        msg.textContent = "Enter a valid email address.";
        msg.style.display = 'block';
        messages[1].textContent.style.color = 'red';
    } else {
        msg.textContent = "Valid email!";
        msg.style.display = 'block';
        messages[1].textContent.style.color = 'green';
    }
}

function validatePassword(passwordInput) {
    const msg = passwordInput.nextElementSibling;

    if (passwordInput.value.length < 8 || passwordInput.value.length > 15) {
        msg.textContent = "Password must be 8-15 characters long.";
        msg.style.display = 'block';
        messages[2].textContent.style.color = 'red';
    } else {
        msg.textContent = "Valid password!";
        msg.style.display = 'block';
        messages[2].textContent.style.color = 'green';
    }
}
function validatePasswordConfirmation(confirmPasswordInput) {
    const passwordInput = form['password'];
    const msg = confirmPasswordInput.nextElementSibling;

    if (confirmPasswordInput.value !== passwordInput.value) {
        msg.textContent = "Passwords do not match.";
        msg.style.display = 'block';
        messages[3].textContent.style.color = 'red';
    } else {
        msg.textContent = "Passwords match!";
        msg.style.display = 'block';
        messages[3].textContent.style.color = 'green';
    }
}