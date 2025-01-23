import axios from "axios";

const API_URL = "http://localhost:3000/api/ask";

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(API_URL, { question: message });
    console.log("Request:", { question: message });
    console.log("Response:", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};