// Simple quiz logic
let currentQuestion = 1;

function checkAnswer(questionNum, isCorrect) {
    const feedbackEl = document.getElementById(`feedback-${questionNum}`);
    const btns = document.querySelectorAll(`#q${questionNum} .quiz-btn`);
    
    // Disable buttons
    btns.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        feedbackEl.textContent = "¡✅ Correcto! Excelente análisis.";
        feedbackEl.className = "feedback correct";
        
        // Move to next question after 1.5s
        setTimeout(() => {
            const currentQEl = document.getElementById(`q${questionNum}`);
            const nextQEl = document.getElementById(`q${questionNum + 1}`);
            
            if (nextQEl) {
                currentQEl.classList.remove('active');
                nextQEl.classList.add('active');
            } else {
                // Quiz finished
                currentQEl.innerHTML = `
                    <h3>🎉 ¡Quiz Completado!</h3>
                    <p>Has demostrado entender a la perfección el flujo condicional y los conmutadores. ¡Excelente trabajo!</p>
                `;
            }
        }, 2000);
    } else {
        feedbackEl.textContent = "❌ Hmm, no exactamente. Dale una pensada más. Recarga para intentarlo de nuevo.";
        feedbackEl.className = "feedback incorrect";
    }
}
