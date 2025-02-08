import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import './Chat.css';

const Chat = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm interested in your cardboard boxes.", type: 'received', time: '10:30 AM' },
    { id: 2, text: "Sure! They're still available. How many do you need?", type: 'sent', time: '10:32 AM' },
    { id: 3, text: "I need about 30 boxes.", type: 'received', time: '10:33 AM' },
  ]);

  const [chats] = useState([
    { id: 1, name: 'EcoPackaging Inc', lastMessage: "Sure! They're still available.", time: '10:32 AM', unread: 2 },
    { id: 2, name: 'TechStart', lastMessage: 'Thanks for the office supplies!', time: 'Yesterday', unread: 0 },
    { id: 3, name: 'Green Solutions', lastMessage: 'When can I pick them up?', time: '2 days ago', unread: 1 },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: message, type: 'sent', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-popup">
      <div className="chat-header">
        <h3>Messages</h3>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          <X size={20} />
        </button>
      </div>

      {/* Chat List */}
      <div className="chat-lists">
        {chats.map(chat => (
          <div key={chat.id} className="chat-list">
            <div className="chat-list-header">
              <span className="chat-list-name">{chat.name}</span>
              <span className="chat-list-time">{chat.time}</span>
            </div>
            <div className="chat-list-preview">{chat.lastMessage}</div>
          </div>
        ))}
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message message-${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button className="send-button" onClick={handleSend}>
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default Chat;