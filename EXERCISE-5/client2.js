const http = require('http');

const postData = 'Hello Server I am mohamed aslam.'; 

const options = {
  hostname: 'localhost',
  port: 3010, 
  path: '/count',
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const response = JSON.parse(data);
    console.log('Word Count:', response.wordCount);
    console.log('Character Count:', response.charCount);
  });
});

req.on('error', (error) => {
  console.error('Request error:', error);
});

req.write(postData);
req.end();
