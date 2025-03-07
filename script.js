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
    let button = document.getElementById("button1");

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

document.getElementById("button1").addEventListener("click", function() {
    let container = document.getElementById("registerPart");
    container.style.display = (container.style.display === "none") ? "block" : "none";
});