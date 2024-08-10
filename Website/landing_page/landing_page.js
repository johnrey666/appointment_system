document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        const title = this.getAttribute('data-title');
        const description = this.getAttribute('data-description');
        document.getElementById('serviceModalLabel').textContent = title;
        document.getElementById('serviceDescription').textContent = description;
        $('#serviceModal').modal('show');
    });
});

    function toggleChatbot() {
        const chatbot = document.getElementById('chatbot');
        if (chatbot.style.display === 'none' || chatbot.style.display === '') {
            chatbot.style.display = 'block';
        } else {
            chatbot.style.display = 'none';
        }
    }

    function displayAnswer(question) {
        const answers = {
            "What are your office hours?": "Our office hours are Monday to Friday, 9 AM to 5 PM.",
            "How do I schedule an appointment?": "You can schedule an appointment by calling our office or using our online appointment booking system.",
            "What services do you offer?": "We offer a wide range of dental services including cleanings, fillings, crowns, and more.",
            "Do you accept my insurance?": "We accept most major insurance plans. Please contact our office for specific information.",
            "What should I expect during my first visit?": "During your first visit, we will conduct a comprehensive dental examination and discuss your treatment options."
        };
        document.getElementById('chatbot-answer').innerText = answers[question];
    }

