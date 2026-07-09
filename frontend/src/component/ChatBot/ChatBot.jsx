import { useState } from "react";
import "./ChatBot.css";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import axios from "axios";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I am CareerXpert AI. Ask me anything about careers.",
    },
  ]);

  const [input, setInput] = useState("");
const sendMessage = async () => {

  if (input.trim() === "") return;

  const userMessage = {
    sender: "user",
    text: input,
  };

  setMessages((prev) => [...prev, userMessage]);

  const question = input;

  setInput("");

  // Get logged in user
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  try {

    const res = await axios.post(
      "http://localhost:5000/api/chat",
      {
        message: question,
        userId: loggedInUser._id,
      }
    );

    const aiReply = {
      sender: "ai",
      text: res.data.reply,
    };

    setMessages((prev) => [...prev, aiReply]);

  } catch (error) {

    console.error("Axios Error:", error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    }

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: "⚠️ Server connection failed.",
      },
    ]);
  }
};

const clearChat = () => {
  setMessages([]);
};
  return (
    <>
      <div className="chat-toggle-wrapper">
  <button
    className="chat-toggle"
    onClick={() => setIsOpen(!isOpen)}
  >
    💬
  </button>

  <span className="chat-tooltip">
    AI Chatbot
  </span>
</div>
      {isOpen && (
        <div className="chat-window">

          <div className="chat-header">
            🤖 CareerXpert AI
            <button onClick={()=>setIsOpen(false)}>
        ✖
    </button>

          </div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                sender={msg.sender}
                text={msg.text}
              />
            ))}
            <button onClick={clearChat}>
  Clear Chat
</button>
          </div>

          <ChatInput
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
          />

        </div>
      )}
    </>
  );
};

export default ChatBot;