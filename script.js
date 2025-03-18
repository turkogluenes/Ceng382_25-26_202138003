// I took help while writing this js file from ChatGpt

function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString('en-GB'); // 24 saat formatı
    document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("backgroundLoop");
    let button = document.getElementById("play");

    button.addEventListener("click", function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

document.addEventListener("keydown", function(event) {
    if (event.key === "h" || event.key === "H") {
        let register = document.getElementById("registerPart");
        register.style.display = (register.style.display === "none") ? "block" : "none";
    }
});

document.getElementById("play").addEventListener("click", function() {
    let container = document.getElementById("registerPart");
    container.style.display = (container.style.display === "none") ? "block" : "none";
});

let users = [];

document.getElementById("submitButton").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    users.push({ username, password });
    console.log(users);
});

// I took these lines from ChatGPT
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitButton").addEventListener("click", function () {

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        
        const defaultUsername = "admin";
        const defaultPassword = "admin";
        
        if (username === defaultUsername && password === defaultPassword) {
            window.location.href = "table.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});


