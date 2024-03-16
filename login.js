const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields';
        return;
    }

    // Simulate successful login (assuming you have a 'dashboard.html' page for successful login)
    if (username === 'admin' && password === 'password') {
        window.location.href = 'Home.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
