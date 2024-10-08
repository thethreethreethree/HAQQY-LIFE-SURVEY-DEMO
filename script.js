document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Collect form data (basic example)
    const formData = new FormData(event.target);

    // Process the data (you could log it to the console or send it to a server/API)
    console.log('Form submitted:', Object.fromEntries(formData.entries()));

    // Show success message
    document.getElementById('submissionMessage').innerText = 'Thank you for your submission!';
});
