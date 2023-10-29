document.addEventListener("DOMContentLoaded", function () {
    // Get references to the input field, confirmation button, and submission-container-2
    const submissionText = document.getElementById("submission-text");
    const confirmationButton = document.getElementById("confirmation-button");
    const submissionContainer2 = document.querySelector(".submission-container-2");

    // Hide submission-container-2 initially
    submissionContainer2.style.display = "none";

    // Add a click event listener to the confirmation button
    confirmationButton.addEventListener("click", function () {
        // Check if the input contains the value "1"
        if (submissionText.value.trim() === "1") {
            // Show submission-container-2 and set its text
            submissionContainer2.style.display = "block";
            submissionContainer2.querySelector("h1").innerText = "The Link You Uploaded is SAFE!";

            // Reset text color and border color to default
            submissionContainer2.querySelector("h1").style.color = "";
            submissionContainer2.style.borderColor = "";
        } else if (submissionText.value.trim() === "2") {
            // Set the text and change text color and border color to red
            submissionContainer2.style.display = "block";
            const h1 = submissionContainer2.querySelector("h1");
            h1.innerText = "The Link You Uploaded might be UNSAFE!";
            h1.style.color = "red";
            submissionContainer2.style.borderColor = "red";
            submissionContainer2.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.767)"
        } else {
            submissionContainer2.style.display = "none";
        }
    });
});