import axios from 'axios';

const API_URL = 'http://localhost:3000/api/chatbot-ai/ask';

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(API_URL, { message });
        console.log('Message sent:', message);
        console.log('Response received:', response.data.data);
        return response.data.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};