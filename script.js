    async function sendQuery() {
        const input = document.getElementById("query");
        const query = input.value.trim();
        if (!query) return;
      
        const chatBox = document.getElementById("chat-box");
        chatBox.innerHTML += `<div class="user-msg">You: ${query}</div>`;
        input.value = "";
      
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query })
        });
      
        const data = await res.json();
        chatBox.innerHTML += `<div class="bot-msg">Bot: ${data.answer}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
      }
      
