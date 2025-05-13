
// customer_login.js

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector("button.c");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous error styling
    usernameInput.style.border = "";
    passwordInput.style.border = "";

    // Basic validation
    if (!username || !password) {
      if (!username) {
        usernameInput.style.border = "2px solid red";
      }
      if (!password) {
        passwordInput.style.border = "2px solid red";
      }
      alert("Please fill in both username and password.");
      return;
    }

    // Simulate backend login call (AJAX or real API call can be added here)
    // For demonstration, this just logs to the console
    console.log("Logging in with:", { username, password });

    // TODO: Replace this with actual fetch/ajax call
    // Example:
    /*
    fetch("customer_login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        window.location.href = "customer_dashboard.php";
      } else {
        alert("Invalid credentials. Please try again.");
      }
    })
    .catch(err => {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again later.");
    });
    */

    // Temporary success mock (for UI feedback before backend hookup)
    alert("Login functionality wired! Connect PHP for real login.");
  });
});
