const http = require('http');

const message = 'Hello world!';

const options = {
  hostname: 'localhost',
  port: 3000,
  path: `/?message=${message}`,
  method: 'GET'
};

const req = http.request(options, (res) => {
  res.on('data', (chunk) => {
    console.log(chunk.toString());
  });
});

req.end();
