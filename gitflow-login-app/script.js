// Email & Password validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  let valid = true;

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.textContent = "Invalid email format";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password regex (8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password.value)) {
    passwordError.textContent = "Weak password (min 8 chars, A-Z, a-z, 0-9, symbol)";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (valid) {
    // Remember Me feature
    const rememberMe = document.getElementById("rememberMe").checked;
    if (rememberMe) {
      localStorage.setItem("savedEmail", email.value);
    } else {
      localStorage.removeItem("savedEmail");
    }

    alert("Login Successful!");
  }
});

// Live password strength check
document.getElementById("password").addEventListener("input", function () {
  const strengthText = document.getElementById("strength");
  const val = this.value;
  if (val.length === 0) {
    strengthText.textContent = "";
    return;
  }

  if (val.length < 6) {
    strengthText.textContent = "Strength: Weak";
    strengthText.style.color = "red";
  } else if (val.length < 10) {
    strengthText.textContent = "Strength: Medium";
    strengthText.style.color = "orange";
  } else {
    strengthText.textContent = "Strength: Strong";
    strengthText.style.color = "green";
  }
});

// Auto-fill email if saved
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("savedEmail");
  if (saved) {
    document.getElementById("email").value = saved;
    document.getElementById("rememberMe").checked = true;
  }
});
