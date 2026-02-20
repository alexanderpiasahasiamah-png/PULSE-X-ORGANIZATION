async function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value;
    const chatBox = document.getElementById("chat-messages");

    chatBox.innerHTML += "<p><b>You:</b> " + message + "</p>";

    try {
        const response = await fetch("https://YOUR_RENDER_BACKEND_URL/chat", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({message})
        });
        const data = await response.json();
        chatBox.innerHTML += "<p><b>PulseX AI:</b> " + data.reply + "</p>";
        input.value="";
    } catch(err) {
        chatBox.innerHTML += "<p><b>PulseX AI:</b> Error connecting to server.</p>";
    }
}
