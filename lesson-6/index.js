const http = require('http');
const fs = require('fs');

//chunk
// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// ourReadStream.on('data', (chunk) => {
//     //console.log(chunk);
//     console.log(chunk.toString());
// });

//data
// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
// ourReadStream.on('data', (data) => {
//     console.log(data);
// });

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000);

console.log('listening on port 3000');