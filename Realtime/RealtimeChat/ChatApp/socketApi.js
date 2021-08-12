import io from 'socket.io-client';

let socket;

export const initializeSocket = () => {
  socket = io('http://localhost:3000');

  console.log('Connecting socket...');
  socket.on('connect', () => console.log('connected'));
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) {
    socket.disconnect();
  }
};

export const sendMessage = message => {
  if (socket) {
    socket.emit('new-message', message);
  }
};

export const subscribeToChat = cb => {
  if (!socket) {
    return true;
  }
  socket.on('receive-message', msg => {
    console.log('Websocket event received!');
    return cb(msg, null);
  });
};
