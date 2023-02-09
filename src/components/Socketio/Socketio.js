import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Socketio = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = io('http://192.168.1.63:6868');
    setSocket(socket);
    socket.on('connect', () => {
      console.log('Connected to the server');
    });
    socket.on('disconnect', () => {
      console.log('Disconnected from the server');
    });
    socket.on('message', (msg) => {
      console.log(`Received message: ${msg}`);
      setMessage(msg);
    });
    socket.on('message_client_web', (msg) => {
        console.log('message_client_web:',msg["content"]);
        // setMessage(msg);
      });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    socket.emit('server_client_web', message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Socketio;