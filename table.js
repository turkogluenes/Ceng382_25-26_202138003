// I took most lines from ChatGPT in this js file

document.addEventListener("DOMContentLoaded", function () {
    const classForm = document.getElementById("classForm");
    const addClassButton = document.getElementById("addClass");
    const classTableBody = document.getElementById("classTableBody");

    addClassButton.addEventListener("click", function () {
        const className = document.getElementById("className").value;
        const numPeople = document.getElementById("numPeople").value;
        const description = document.getElementById("description").value;

        if (className && numPeople && description) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td tabindex="0">${className}</td>
                <td tabindex="0">${numPeople}</td>
                <td tabindex="0">${description}</td>
            `;

            classTableBody.appendChild(row);
            classForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // First Function: Highlight input fields on focus
    classForm.addEventListener("focusin", function (event) {
        event.target.style.backgroundColor = "#e0f7fa";
    });

    classForm.addEventListener("focusout", function (event) {
        event.target.style.backgroundColor = "";
    });

    // Second Function Double-click to remove row
    classTableBody.addEventListener("dblclick", function (event) {
        const row = event.target.closest("tr");
        if (row) {
            if (confirm("Are you sure you want to delete this row?")) {
                row.remove();
            }
        }
    });

    // Third Function: Focus event 
    classTableBody.addEventListener("focusin", function (event) {
        if (event.target.tagName === "TD") {
            event.target.style.backgroundColor = "#ffeb3b"; // Sarı renk
        }
    });

    classTableBody.addEventListener("focusout", function (event) {
        if (event.target.tagName === "TD") {
            event.target.style.backgroundColor = ""; // Eski haline döndür
        }
    });
});
