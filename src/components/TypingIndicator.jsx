import React from 'react';

const TypingIndicator = () => {
    return (
        <div className="flex items-end gap-2 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-200">
                <span className="text-sm">🤖</span>
            </div>
            <div className="relative px-4 py-2 rounded-2xl bg-gray-100 text-gray-800 rounded-bl-none">
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <div className="absolute bottom-0 left-0 border-r-[8px] border-r-transparent border-b-[8px] border-b-gray-100"></div>
            </div>
        </div>
    );
};

export default TypingIndicator;