document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Check if the entered username and password are correct
      if (username === "Satya" && password === "Satya@2002") {
        // Redirect to the target URL
        window.location.href = "https://docs.google.com/spreadsheets/d/1hAORK7M86bE1GyhOhb8-Z6_BvxAiu1GrM-b1FLug-1o/edit#gid=0";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  });
  