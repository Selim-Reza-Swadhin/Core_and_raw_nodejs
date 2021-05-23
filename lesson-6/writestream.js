const fs = require('fs');

//chunk
const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk);
// });

//pipe
ourReadStream.pipe(ourWriteStream);