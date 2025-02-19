const http = require('http');

const options = {
  hostname: 'www.bing.com',
  port: 80,
  path: '/',
  method: 'GET',
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log("\nRESPONSE FROM THE URL\n\n");
    console.log(data);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();