// Dynamic Greeting Based on Time of Day
function updateGreeting() {
    let greetingText = document.getElementById("greeting");
    let hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    greetingText.innerText = greeting + " Welcome to my portfolio!";
}

// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Resume Download Function
function downloadResume() {
    window.open("Resume-Sai.pdf", "_blank");
}

// Call greeting function on page load
document.addEventListener("DOMContentLoaded", updateGreeting);
