document.addEventListener('DOMContentLoaded', function() {

    // ======== DAN GPT CHATBOT ========
    const chatButton = document.getElementById('chat-button');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-text-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');
    const chatTrigger = document.getElementById('chat-trigger'); // Hero button

    // Knowledge Base for DanGPT
    const knowledgeBase = {
        "hello": "Hi there! I'm DanGPT, Dan's AI assistant. How can I help you today?",
        "hi": "Hello! Feel free to ask me about Dan's skills, projects, or interests.",
        "who is dan": "Dan Legend, also known as Daniel Morris, is a web developer and AI enthusiast who loves football and technology.",
        "what does dan do": "Dan builds interactive websites, explores AI experiments, and analyzes football strategies.",
        "dan's skills": "Dan is skilled in HTML, CSS, JavaScript, Node.js, MongoDB, and React/Next.js. He's also proficient with Git and GitHub.",
        "skills": "Dan is skilled in HTML, CSS, JavaScript, Node.js, MongoDB, and React/Next.js. He's also proficient with Git and GitHub.",
        "dan's projects": "Dan has worked on various projects including e-commerce platforms, AI chatbots, and web applications. You can check them out in the Portfolio section!",
        "projects": "You can see Dan's projects in the Portfolio section. There's an E-Commerce platform, an AI Football Predictor, and a Task Management App.",
        "dan's hobbies": "Dan enjoys football analytics, AI experiments, gaming, and reading tech blogs.",
        "hobbies": "Dan's hobbies are football analytics, AI experiments, gaming, and reading tech blogs.",
        "contact dan": "You can contact Dan through the contact form on this website, or via email at dan.legend@example.com.",
        "contact": "You can contact Dan through the contact form on this website, or via email at dan.legend@example.com.",
        "who developed you": "I was developed by Dan Legend using HTML, CSS, and JavaScript to help answer questions about him and his work.",
        "default": "I'm not sure how to answer that. I can tell you about Dan's skills, projects, hobbies, or how to contact him. What would you like to know?"
    };

    // Toggle chat window
    const openChat = () => {
        chatWindow.classList.add('active');
        chatButton.style.display = 'none';
    };
    
    const closeChat = () => {
        chatWindow.classList.remove('active');
        chatButton.style.display = 'flex';
    };

    chatButton.addEventListener('click', openChat);
    chatTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openChat();
    });
    chatClose.addEventListener('click', closeChat);
    
    // Add message to chat
    const addMessage = (text, sender) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        
        const messageText = document.createElement('p');
        messageText.textContent = text;
        
        messageElement.appendChild(messageText);
        chatMessages.appendChild(messageElement);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };
    
    // Generate bot response based on user input
    const generateResponse = (userInput) => {
        const input = userInput.toLowerCase().trim();
        
        // Check for exact matches first
        if (knowledgeBase[input]) {
            return knowledgeBase[input];
        }
        
        // Check for partial matches
        for (const key in knowledgeBase) {
            if (input.includes(key) && key !== 'default') {
                return knowledgeBase[key];
            }
        }
        
        // Return default response if no match found
        return knowledgeBase['default'];
    };
    
    // Send message function
    const sendMessage = () => {
        const message = chatInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addMessage(message, 'user');
        chatInput.value = '';
        
        // Generate and add bot response
        setTimeout(() => {
            const response = generateResponse(message);
            addMessage(response, 'bot');
        }, 500 + Math.random() * 500); // Add a random delay for a more natural feel
    };
    
    // Event listeners for sending messages
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});