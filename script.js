function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('open');
}

function toggleChat() {
    const chatPopup = document.getElementById('chat-popup');
    chatPopup.classList.toggle('open');
}

window.addEventListener('message', (event) => {
    if (event.data === 'closeChat') {
        toggleChat();
    }
});
