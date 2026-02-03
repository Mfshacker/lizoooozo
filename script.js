const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function addMessage(text, className) {
  const msg = document.createElement("div");
  msg.className = `message ${className}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    const botReply = generateBotReply(text);
    addMessage(botReply, "bot");
  }, 600);
}

function generateBotReply(input) {
  return `You said: "${input}" 😄 (I'm a mini version for now!)`;
}

// Enter key support
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
