// foo.js
var seneca = require('seneca')();
seneca  
	.add({
		"role": "bar",
		"cmd": "ping"
	}, (args, done) => {
		done(null, {result: "Hi there"});
	})
	.listen({"type": "http", "port": 10102});