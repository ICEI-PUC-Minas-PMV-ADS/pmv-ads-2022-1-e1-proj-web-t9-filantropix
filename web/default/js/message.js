function setMessage(msg) {
    localStorage.setItem('message-alert', msg);
}

function getMessage() {
    return localStorage.getItem('message-alert');
}

function removeMessage() {
    localStorage.removeItem('message-alert');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function hidde() {
    await sleep(2500);
    const msgContainer = document.getElementById('top-msg-container');
    msgContainer.style.visibility = 'hidden';
}

const msgContainer = document.getElementById('top-msg-container');
const msgElement = document.getElementById('top-msg');
const msg = getMessage();

if (msg) {
    msgElement.innerHTML = msg;
    msgContainer.style.visibility = 'visible';
    msgContainer.animate([
        {transform: 'translate(0px,-40px)'},
        {transform: 'translate(0px,0px)'}
    ],
    {duration: 500}
    );

    removeMessage();
    hidde();
}
