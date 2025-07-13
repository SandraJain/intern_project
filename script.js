const input = document.querySelector("input");
const button = document.querySelector("button");
const chatWindow = document.querySelector(".chat-window");
const newChatBtn = document.getElementById("new-chat");

// 傳送訊息
function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  addMessage("user", text);
  input.value = "";

  setTimeout(() => {
    addMessage("bot", `你說的是「${text}」嗎？`);
  }, 500);
}

// 加入氣泡
function addMessage(role, text) {
  const message = document.createElement("div");
  message.classList.add("message", role);
  message.textContent = text;
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// 點擊送出
button.addEventListener("click", sendMessage);

// Enter 鍵送出
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

// 點擊「新聊天」清空視窗並加入開場白
newChatBtn.addEventListener("click", () => {
  chatWindow.innerHTML = "";
  addMessage("bot", "嗨～請問有什麼可以幫忙的嗎？");
});

