const http = require('http');

const server = http.createServer((req, res) => {
  // Get the message from the client
  const message = req.url.split('?')[1];

  // Split the message into words
  const words = message.split(' ');

  // Count the number of words and characters
  const wordCount = words.length;
  const characterCount = message.length;

  // Send the response back to the client
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Word count: ${wordCount}, Character count: ${characterCount}`);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});