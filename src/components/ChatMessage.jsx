import React from 'react';

const ChatMessage = ({ message, isUser }) => {
    return (
        <div className={`flex items-end gap-2 mb-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* Avatar */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? 'bg-blue-100' : 'bg-gray-200'
                }`}>
                {isUser ? (
                    <span className="text-sm">👤</span>
                ) : (
                    <span className="text-sm">🤖</span>
                )}
            </div>

            {/* Message Bubble */}
            <div
                className={`relative max-w-[70%] px-4 py-2 rounded-2xl ${isUser
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
            >
                {/* Triangle/Pointer */}
                <div
                    className={`absolute bottom-0 ${isUser
                        ? 'right-0 border-l-[8px] border-l-transparent border-b-[8px] border-b-blue-500'
                        : 'left-0 border-r-[8px] border-r-transparent border-b-[8px] border-b-gray-100'
                        }`}
                />

                {/* Message Text */}
                <p className="text-sm whitespace-pre-wrap break-words">{message}</p>

                {/* Timestamp (optional) */}
                <span className={`text-[10px] block mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </div>
    );
};

export default ChatMessage;