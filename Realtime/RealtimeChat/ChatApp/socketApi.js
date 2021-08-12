import io from 'socket.io-client';

let socket;

export const initializeSocket = () => {
  socket = io('http://localhost:3000');

  console.log('Connecting socket...');
  socket.on('connect', () => console.log('connected'));
};
