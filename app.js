document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username && password) {
        window.location.href = "main.html"; 
    } else {
        alert("Please enter a valid username and password.");
    }
});
