import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import { sendMessage } from "./services/chatApi";
import logo from "./assets/logo.png";
import { XMarkIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (message) => {
    // Immediately add user message
    const userMessage = { role: "user", content: message };
    setMessages((prev) => [...prev, userMessage]);

    // Set typing indicator
    setIsTyping(true);

    try {
      // Get bot response with a slight delay to show typing indicator
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Add minimal delay
      const response = await sendMessage(message);
      setMessages((prev) => [...prev, response]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-54 h-54 object-contain" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Universitas Amikom Purwokerto
        </h1>
        <p className="text-gray-600 text-sm italic mt-2">
          *This website is a simulation created for undergraduate thesis
          purposes. It is not the official website of Universitas Amikom
          Purwokerto.
        </p>
      </div>

      {isOpen && (
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onSendMessage={handleSendMessage}
          onClose={() => setIsOpen(false)}
        />
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-purple-700 text-white w-16 h-16 rounded-full shadow-lg hover:bg-purple-800 transition-colors flex items-center justify-center"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <ChatBubbleLeftIcon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

export default App;
