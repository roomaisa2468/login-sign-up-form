// Toggle visibility between Sign-Up and Log-In forms
function showSignUp() {
    document.getElementById("signupForm").classList.add("active");
    document.getElementById("loginForm").classList.remove("active");
}

function showLogIn() {
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("signupForm").classList.remove("active");
}

// Store credentials in localStorage for Sign-Up
function signUp() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    
    if (email && password) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Sign-Up Successful! You can now log in.");
        showLogIn();
    } else {
        alert("Please fill out all fields.");
    }
}

// Validate credentials from localStorage for Log-In
function logIn() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Log-In Successful!");
        window.location.href = "welcome.html";  // Redirect to welcome page
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}

// ------------------------ welcome ------------------------- 
function logIn() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Log-In Successful!");
        window.location.href = "welcome.html";  // Redirect to welcome page after login
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}
function logIn() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Log-In Successful!");
        window.location.href = "welcome.html";  // Redirect to welcome page after login
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}


// ------------------------------------ welcome 
function logIn() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Log-In Successful!");
        window.location.href = "welcome.html";  // Redirect to welcome page after login
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}



// -----------------------------------------------------------------
// Toggle Password Visibility Function
function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// Sign-Up Function
function signUp() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    
    if (email && password) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Sign-Up Successful! You can now log in.");
        showLogIn();
    } else {
        alert("Please fill out all fields.");
    }
}

// Log-In Function
function logIn() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Log-In Successful!");
        window.location.href = "welcome.html";
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}





