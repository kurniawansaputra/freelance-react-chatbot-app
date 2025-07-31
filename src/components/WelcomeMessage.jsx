const WelcomeMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">🤖</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Welcome to AI Chat Assistant!
      </h3>
      <p className="text-gray-600 text-sm">
        I'm here to help answer your questions. Feel free to ask me anything!
      </p>
    </div>
  );
};

export default WelcomeMessage;
