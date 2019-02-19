var socket = io();

socket.on('connect', function () {
	console.log('Connected to server');

	socket.emit('createMessage', {
		from: 'JG',
		text: 'Hello World!'
	});
});

socket.on('newMessage', function (message) {
	console.log('newMessage', message);
});

socket.on('disconnect', function () {
	console.log('Disconnected from server');
});