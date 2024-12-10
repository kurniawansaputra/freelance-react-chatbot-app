import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import WelcomeMessage from './WelcomeMessage';

const ChatWindow = ({ messages, isTyping, onSendMessage, onClose }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    return (
        <div className="fixed bottom-24 right-4 w-96 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
                <h3 className="font-medium">Chat Assistant</h3>
                <button
                    onClick={onClose}
                    className="text-white hover:text-gray-200 transition-colors"
                >
                    ✕
                </button>
            </div>
            <div className="h-96 overflow-y-auto p-4">
                {messages.length === 0 ? (
                    <WelcomeMessage />
                ) : (
                    <>
                        {messages.map((msg, index) => (
                            <ChatMessage
                                key={index}
                                message={msg.content}
                                isUser={msg.role === 'user'}
                            />
                        ))}
                        {isTyping && <TypingIndicator />}
                    </>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="border-t p-4">
                <ChatInput onSendMessage={onSendMessage} />
            </div>
        </div>
    );
};

export default ChatWindow;