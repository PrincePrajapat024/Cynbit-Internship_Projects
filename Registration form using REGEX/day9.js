const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/;
  return regex.test(email);
}

function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/;
  return regex.test(password);
}

function validatePhone(phone) {
  const regex = /^\+91\d{10}$/;
  return regex.test(phone);
}

function showPasswordStrength(password) {
  const strength = document.getElementById('strengthMessage');
  if (password.length < 6) {
    strength.textContent = "Too short";
    strength.style.color = "red";
  } else if (validatePassword(password)) {
    strength.textContent = "Strong password";
    strength.style.color = "green";
  } else {
    strength.textContent = "Weak password";
    strength.style.color = "orange";
  }
}

document.getElementById('password').addEventListener('input', (e) => {
  showPasswordStrength(e.target.value);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;
  const phone = form.phone.value.trim();
  const gender = form.gender.value;
  const city = form.city.value;
  const terms = form.terms.checked;

  function togglePassword(fieldId) {
  const input = document.getElementById(fieldId);
  input.type = input.type === "password" ? "text" : "password";
}


  if (!name || !email || !password || !confirmPassword || !phone || !gender || !city) {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    message.textContent = "Invalid email format.";
    message.style.color = "red";
    return;
  }

  if (!validatePassword(password)) {
    message.textContent = "Password must be at least 6 characters with letters, numbers, and a symbol.";
    message.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  if (!validatePhone(phone)) {
    message.textContent = "Phone must start with +91 and contain 10 digits.";
    message.style.color = "red";
    return;
  }

  if (!terms) {
    message.textContent = "Please accept the terms.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Registration Successful!";
  message.style.color = "green";
  form.reset();
  document.getElementById('strengthMessage').textContent = '';

});

