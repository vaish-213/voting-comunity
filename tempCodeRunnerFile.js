// Function to validate user credentials (dummy function, replace with actual implementation)
function validateCredentials(username, password) {
    // Replace this with your authentication logic
    // For demonstration purposes, let's use hardcoded credentials
    const validUsername = 'admin';
    const validPassword = 'password';
  
    if (username === validUsername && password === validPassword) {
      return true;
    } else {
      return false;
    }
  }
  
  // Function to authenticate user
  function authenticateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (validateCredentials(username, password)) {
      // Redirect user to the main page upon successful authentication
      window.location.href = 'index.html';
    } else {
      // Display error message for invalid credentials
      alert('Invalid username or password. Please try again.');
    }
  }
  