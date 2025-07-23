const form = document.getElementById("registerForm");
const message = document.getElementById("message");
const passwordInput = document.getElementById("password");
const strength = document.getElementById("strength");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const year = document.getElementById("year").value.trim();
  const password = passwordInput.value.trim();

  if (!name || !email || !branch || !year || !password) {
    message.textContent = "All fields are required!";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    message.textContent = "Invalid email address!";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters!";
    message.style.color = "red";
    return;
  }

  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});

// Optional: Password Strength Checker
passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;
  let strengthText = "Weak";

  if (value.length >= 6 && /[0-9]/.test(value) && /[A-Z]/.test(value)) {
    strengthText = "Strong";
  } else if (value.length >= 6) {
    strengthText = "Medium";
  }

  strength.textContent = `Password Strength: ${strengthText}`;
});
