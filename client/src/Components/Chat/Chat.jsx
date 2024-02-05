// import React, { useEffect, useState } from 'react';
// import '../Chat/Chat.css';
// import { IoMdSend } from 'react-icons/io';
// import io from 'socket.io-client';

// const socket = io.connect('http://localhost:5001');

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');

//   useEffect(() => {
//     // Listen for incoming messages from the server
//     socket.on('chat message', (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     // Clean up the event listener when the component unmounts
//     return () => {
//       socket.off('chat message');
//     };
//   }, []);

//   const sendMessage = () => {
//     // Emit a 'chat message' event to the server with the input message
//     socket.emit('chat message', inputMessage);
//     setInputMessage(''); // Clear the input field after sending the message
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-messages">
//         {messages.map((message, index) => (
//           <div key={index} className="message">
//             {message}
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input
//           type="text"
//           value={inputMessage}
//           onChange={(e) => setInputMessage(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button onClick={sendMessage}>
//           <IoMdSend />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chat;
import React, { useState, useEffect } from 'react';
import { IoMdSend } from 'react-icons/io';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5001'); // Replace with your server's origin

const Chat = ({ roomId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.emit('join room', roomId);

    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, [roomId]);

  const sendMessage = async () => {
    const { senderId, content } = input;
    const response = await fetch('http://localhost:5001/chat/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roomId, senderId, content }),
    });

    if (response.ok) {
      setInput({ senderId: '', content: '' });
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender}</strong>: {message.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="sender"
          value={input.senderId}
          onChange={(e) => setInput({ ...input, senderId: e.target.value })}
        />
        <input
          type="text"
          placeholder="message"
          value={input.content}
          onChange={(e) => setInput({ ...input, content: e.target.value })}
        />
        <button onClick={sendMessage}>
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default Chat;