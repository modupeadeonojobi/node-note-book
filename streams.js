const fs = require('fs');
// Use streams for large data

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');


// readStream.on('data', chunk => {
//   console.log('-------------New Stream--------------');
//   console.log(chunk);
//   writeStream.write('\nNew Chunk\n');
//   writeStream.write(chunk);
// });

// Using pipe
readStream.pipe(writeStream);