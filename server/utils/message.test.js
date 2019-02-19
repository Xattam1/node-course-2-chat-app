const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = 'Jen';
		var text = 'Some message';
		var message = generateMessage(from, text);

		expect(message).toInclude({from, text});
		expect(message.createdAt).toBeA('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate the correct location message object', () => {
		var from = 'Deb';
		var latitude = 15;
		var longitude = 19;
		var url = `https://www.google.com/maps?q=${latitude},${longitude}`
		var locationMessage = generateLocationMessage(from, latitude, longitude);

		expect(locationMessage).toInclude({from, url});
		expect(locationMessage.createdAt).toBeA('number');
	});
});