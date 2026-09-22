// Welcome message when the page loads
document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio website loaded successfully!");
});

// Change button text when clicked
const projectButton = document.querySelector(".btn");

projectButton.addEventListener("click", function () {
  projectButton.textContent = "Projects Below ↓";
});

// Automatically update the footer year
const footer = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footer.textContent = `© ${currentYear} Sukhdeep Kaur. All Rights Reserved.`;
