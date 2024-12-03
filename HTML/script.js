// // Simple form validation
// document.querySelector("form").addEventListener("submit", function(event) {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     if (username === "" || password === "") {
//         event.preventDefault(); // Prevent form submission
//         alert("Please fill in both fields before submitting.");
//     } else {
//         alert("Login successful!"); // Replace with actual login handling
//     }
// });

// // Burger menu toggle for responsive navigation
// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.nav-links');

// burger.addEventListener('click', () => {
//     nav.classList.toggle('show');
// });

// Simple form validation
// document.querySelector("form").addEventListener("submit", function(event) {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     if (username === "" || password === "") {
//         event.preventDefault(); // Prevent form submission
//         alert("Please fill in both fields before submitting.");
//     } else {
//         alert("Login successful!"); // Replace with actual login handling
//     }
// });

document.querySelector("form").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "" || password === "") {
      event.preventDefault();
      showErrorNotification("Please fill in both fields before submitting.");
    } else {
      // Actual login logic (e.g., AJAX request, page redirect)
      handleLogin(username, password);
    }
  });
  
  // Function to display error notifications
  function showErrorNotification(message) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.className = "error-notification";
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
  
  // Function to handle login logic
  function handleLogin(username, password) {
    // AJAX request or page redirect
    // For demonstration purposes, we'll use a mock API
    mockLoginAPI(username, password)
      .then((response) => {
        showSuccessNotification("Login successful!");
        // Redirect to dashboard or next step
      })
      .catch((error) => {
        showErrorNotification("Invalid credentials. Please try again.");
      });
  }
  
  // Mock login API (replace with actual API)
  function mockLoginAPI(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "password") {
          resolve({ success: true });
        } else {
          reject({ success: false });
        }
      }, 1000);
    });
  }
  
  // Function to display success notifications
  function showSuccessNotification(message) {
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.className = "success-notification";
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
  