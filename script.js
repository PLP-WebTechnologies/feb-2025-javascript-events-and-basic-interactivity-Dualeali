// Change button text and color on click
document.getElementById("colorBtn").addEventListener("click", function () {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "#FF5733";
  });
  
  // Live heading update
  document.getElementById("liveInput").addEventListener("input", function () {
    document.getElementById("heading").textContent = this.value || "Welcome to mahad Interactive Page 🎉";
  });
  
  // Double click secret
  document.getElementById("colorBtn").addEventListener("dblclick", function () {
    alert("🎉 You discovered the secret double-click!");
  });
  
  // Tab switching
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabContents.forEach(tc => tc.style.display = "none");
      document.getElementById(btn.dataset.tab).style.display = "block";
    });
  });
  
  // Form validation
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");
  
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
    } else {
      feedback.style.color = "green";
      feedback.textContent = "Form submitted successfully!";
      this.reset();
    }
  });
  