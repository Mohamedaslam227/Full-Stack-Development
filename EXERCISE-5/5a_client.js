const net = require('net');

const client = net.connect({port: 8080}, function() {
  console.log('Connected to server');

  // Read data from the server
  client.on('data', function(data) {
    // Display the data on the console
    console.log(data.toString());
  });

  // Send data to the server
  client.write('Hello from the client!');
});

// Handle the client disconnecting
client.on('end', function() {
  console.log('Disconnected from server');
});