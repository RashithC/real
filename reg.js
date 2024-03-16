const registrationForm = document.getElementById('registrationForm');
const errorMessage = document.getElementById('errorMessage');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = registrationForm.name.value;
    const email = registrationForm.email.value;
    const password = registrationForm.password.value;
    const confirmPassword = registrationForm.confirmPassword.value;

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Please fill in all fields';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return;
    }

    // Simulate successful registration
    alert('Registration successful!');

    // Redirect to login page after successful registration (assuming you have a login page at 'login.html')
    window.location.href = 'login.html';
});
