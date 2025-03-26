const form = document.getElementById('question-form');
const input = document.getElementById('question-input');
const chatBox = document.getElementById('caht-box');

let loadingMessageDiv = document.createElement('div');

function displayMessage(message, sender, isLoading = false){
    const message = document.createElement('div');
    message.classList.add('message',sender);

    const p = document.createElement('p');
    p.textContent = message;

    if(isLoading){
        const spinner = document.createElement['span'];
        spinner.classList.add('Loading-apinner');
        p.textContent = 'Thinking...';
        message.appendChild(spinner);

    }

    message.appendChild(p);
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

    if(isLoading){
        return messageDiv;
    }

    form.addEventListener('submit', async (e) =>{
        e.preventDefault();

        const question = input.ariaValueMax.trim();

        if(!question){
            return;
        }

        displayMessage(question, 'user');
        input.value = '';

        loadingMessageDiv = displayMessage('Thinking...', 'assistant', true);

        try{
            const response = await fetch ('http://localhost:3000/chat', {
                
            })
        }
    })
}
