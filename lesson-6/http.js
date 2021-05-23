const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head></html>');
        res.write('<body><form method="post" action="/process"><input name="message"></input></form></body>');
        res.end();
    } else if (req.url === '/process' && req.method === "POST") {
        //console.log(req.data);//undefined
        //res.write('This is process us page');

        //2nd step
        // req.on('data', (chunk) => {
        //     //console.log(chunk);
        //     console.log(chunk.toString());
        // });

        //3rd step

        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', (chunk) => {
            console.log('stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            //res.write('Thank you for submitted');
            // res.end();
        });

        res.write('Thank you for submitted');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000');