import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import { sendMessage } from './services/chatApi';
import { XMarkIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (message) => {
    // Immediately add user message
    const userMessage = { role: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);

    // Set typing indicator
    setIsTyping(true);

    try {
      // Get bot response with a slight delay to show typing indicator
      await new Promise(resolve => setTimeout(resolve, 1000)); // Add minimal delay
      const response = await sendMessage(message);
      setMessages(prev => [...prev, response]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-4xl">🤖</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">AI Chat Assistant</h1>
        <p className="text-gray-600">
          Click the chat button in the bottom right corner to start a conversation.
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
        className="fixed bottom-6 right-6 bg-blue-500 text-white w-16 h-16 rounded-full shadow-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
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