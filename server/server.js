const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server)

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	// socket.emit('newMessage', {
	// 	from: 'John',
	// 	text: 'See you then',
	// 	createdAt: Date.now()
	// });

	socket.on('createMessage', (message) => {
		console.log('createMessage', message);

		socket.emit('newMessage', {
			from: message.from,
			text: message.text,
			createdAt: Date.now()
		});
	});

	socket.on('disconnect', () => {
		console.log('User was disconnected');
	});
});

server.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});