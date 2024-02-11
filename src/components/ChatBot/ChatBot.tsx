// ChatbotComponent.tsx
import React, { useState } from 'react';

const ChatBot: React.FC = () => {
  const [inputMessage, setInputMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSendMessage = async () => {
    // Lógica para enviar el mensaje al servicio del chatbot y recibir una respuesta
    // Puedes utilizar axios u otra librería para hacer la solicitud al backend

    // Ejemplo simplificado (no funcional) para demostrar la idea
    const response = await fetch('URL_DEL_BACKEND/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputMessage }),
    });

    const responseData = await response.json();
    const newChatHistory = [...chatHistory, `User: ${inputMessage}`, `Bot: ${responseData.response}`];
    setChatHistory(newChatHistory);
    setInputMessage('');
  };

  return (
    <div>
      <div style={{ minHeight: '200px', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        {chatHistory.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
