const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Mike',
			room: 'Node Course'
		}, {
			id: '2',
			name: 'Jen',
			room: 'React Course'
		}, {
			id: '3',
			name: 'Julie',
			room: 'Node Course'
		}];
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Justin',
			room: 'The Office Fans'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		var user = users.users[0];
		var removedUser = users.removeUser(user.id);

		expect(removedUser.id).toBe(user.id);
		expect(users.users.length).toBe(2);
	});

	it('should not remove user', () => {
		var userId = 123;
		var removedUser = users.removeUser(userId);

		expect(removedUser).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var user = users.users[0];
		var foundUser = users.getUser(user.id);

		expect(foundUser.id).toBe(user.id);
	});

	it('should not find user', () => {
		var userId = 123;
		var foundUser = users.getUser(userId);

		expect(foundUser).toNotExist();
	});

	it('should return names for the node course', () => {
		var userList = users.getUserList('Node Course');

		expect(userList).toEqual(['Mike', 'Julie']);
	});

	it('should return names for the react course', () => {
		var userList = users.getUserList('React Course');

		expect(userList).toEqual(['Jen']);
	});

});