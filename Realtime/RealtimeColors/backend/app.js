const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let defaultData = { color: '#5fdcba', owner: null };

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.emit('change-color', defaultData);

  socket.on('new-color', (data) => {
    console.log('new color received ', data);

    defaultData = data;
    io.emit('change-color', data);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
