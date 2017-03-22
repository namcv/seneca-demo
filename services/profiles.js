// foo.js
var seneca = require('seneca')();
const db = require('../db');
const profiles = db.profiles;
seneca  
	.add({"role": "profiles", "cmd": "get"}, (args, done) => {  
		
		return profiles.find().exec().then(res => {
			done(null, {result: res})
		}).catch(err => {
			console.log(err)
		})
	})
	.listen();