// foo.js
var seneca = require('seneca')();
const db = require('../db');
const users = db.users;
seneca  
	.add({
		"role": "foo", 
		"cmd": "ping"
	}, (args, done) => {
		done(null, {result: "Hi there"});
	})
	.add({"role": "foo", "cmd": "create"}, (args, done) => {  
		let email = args.email || '';
		let firstName = args.firstName || '';
		let lastName = args.lastName || '';
		let user = new users({
			email: email,
			firstName: firstName,
			lastName: lastName
		});
		return user.save().then(res => {
			done(null, {result: res});
		}).catch(err => {
			console.log(err)
		})
	})
	.add({"role": "foo", "cmd": "get"}, (args, done) => {  
		
		return users.find().exec().then(res => {
			done(null, {result: res})
		}).catch(err => {
			console.log(err)
		})
	})
	.listen();