
// admin_login.js

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

    console.log("Logging in as admin with:", { username, password });

    // TODO: Replace this with actual fetch/ajax call
    /*
    fetch("admin_login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        window.location.href = "admin_dashboard.php";
      } else {
        alert("Invalid credentials. Please try again.");
      }
    })
    .catch(err => {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again later.");
    });
    */

    // Temporary mock success
    alert("Login functionality wired for ADMIN! Connect PHP to activate.");
  });
});
