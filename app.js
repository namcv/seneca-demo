// Create a new SenecaJS application
var seneca = require('seneca')();  
const db = require('./db');
const users = db.users;

seneca.add({"role": "compose", "cmd": "ping"}, (args, done) => {  
  done(null, {result: args});
});


seneca.add({"role": "users", "cmd": "create"}, (args, done) => {  
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
});

seneca.add({"role": "users", "cmd": "get"}, (args, done) => {  
	
	return users.find().exec().then(res => {
		done(null, {result: res})
	}).catch(err => {
		console.log(err)
	})
});


seneca.listen({"type": "http", "port": 8080});  