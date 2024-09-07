document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Basic client-side validation
    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // For demonstration purposes, we'll use a simple hardcoded check
    // In a real-world application, you would send the data to a server for authentication
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to a dashboard or another page after successful login
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
});
