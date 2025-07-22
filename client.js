const socket = io();
const sendBtn = document.getElementById("sendBtn");
const msgInput = document.getElementById("msg");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", () => {
  const message = msgInput.value;
  if (message.trim() !== "") {
    socket.emit("chat message", message);
    msgInput.value = "";
  }
});

socket.on("chat message", (msg) => {
  const div = document.createElement("div");
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
});
