// app.js
var seneca = require('seneca');

var foo = seneca()  
    .client()
    .act({"role": "foo", "cmd": "get"}, function(err, response) {
        if (err) console.error(err);
        else console.log(response);
    });


// var bar = seneca()  
//     .client(10102)
//     .act({"role": "bar", "cmd": "ping"}, (err, response) => {
//         if (err) console.error(err);
//         else console.log(response);
//     });