document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate form
    if (username === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Check if username already exists
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (existingUsers.some(user => user.username === username)) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    // Save new user
    existingUsers.push({ username, password });
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Redirect to login page or show success message
    alert('Account created successfully! You can now log in.');
    window.location.href = 'login.html'; // Redirect to login page
});
