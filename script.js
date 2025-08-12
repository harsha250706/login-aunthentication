
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    let isValid = true;
    let errorMessages = [];

    // Email validation
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      isValid = false;
      errorMessages.push("Please enter a valid email address.");
    }

    // Password validation
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 6) {
      isValid = false;
      errorMessages.push("Password must be at least 6 characters long.");
    }

    // Show errors if invalid
    if (!isValid) {
      event.preventDefault(); // stop form submission
      alert(errorMessages.join("\n"));
    }
  });
});

