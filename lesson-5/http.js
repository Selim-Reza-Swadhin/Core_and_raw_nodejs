const http = require('http');

//low label
// const server = http.createServer();

// server.on('connection', () => {
//     console.log('New connection...');
// });

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello programmers!');
        res.write('How are you doing?');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about us page');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000');