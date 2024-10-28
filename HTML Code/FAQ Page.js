// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Select all questions
    const all_questions = document.querySelectorAll('.faq-question');
    // Loop through each question and add a click event listener
    all_questions.forEach(question => {
        question.addEventListener('click', () => {
            // Change the visibility of the answer for the clicked question
            const answer = question.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                // Hide all other answers when clicking on a new question
                document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                    otherAnswer.style.display = 'none';
                });
                answer.style.display = 'block';
            }
        });
    });
});
