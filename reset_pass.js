// reset_pass.js
function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function resetPassword() {
    const emailOrPhone = document.getElementById("resetEmailOrPhone").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword === confirmPassword) {
        alert("Password has been set successfully!");
        window.location.href = "index.html";  // Redirect to Log In page after successful reset
    } else {
        alert("Passwords do not match. Please try again.");
    }
}

