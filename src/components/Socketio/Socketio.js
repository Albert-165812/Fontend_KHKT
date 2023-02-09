import {useEffect } from 'react';
import io from 'socket.io-client';

const Socketio = () => {
  useEffect(() => {
    const socket = io('http://192.168.1.63:6868');
    socket.on('connect', () => {
      console.log('Connected to the server');
    });
    socket.on('disconnect', () => {
      console.log('Disconnected from the server');
    });
    socket.on('message', (msg) => {
      console.log(`Received message: ${msg}`);
    });
    socket.on('message_client_web', (msg) => {
        console.log('message_client_web:',msg["content"]);
        // setMessage(msg);
      });
    return () => {
      socket.disconnect();
    };
  }, []);
};

export default Socketio;