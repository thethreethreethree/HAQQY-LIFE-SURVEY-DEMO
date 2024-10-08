const questions = document.querySelectorAll('.question');
let currentQuestionIndex = 0;

// Function to show the current question
function showQuestion(index) {
    questions.forEach((question, i) => {
        question.style.display = i === index ? 'block' : 'none';
    });
}

// Function to handle the next question button click
document.getElementById('nextButton').addEventListener('click', function() {
    const currentQuestion = questions[currentQuestionIndex];
    const isAnswered = currentQuestion.querySelector('input[type="radio"]:checked') || 
                      currentQuestion.querySelector('input[type="checkbox"]:checked') || 
                      currentQuestion.querySelector('textarea');

    if (isAnswered) {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            // All questions answered, show thank you message
            document.getElementById('submissionMessage').innerText = 'Thank you for your submission! We appreciate your feedback!';
            document.getElementById('surveyForm').style.display = 'none'; // Hide form
        }
    } else {
        alert('Please answer the question before proceeding!');
    }
});

// Show the first question on page load
showQuestion(currentQuestionIndex);
