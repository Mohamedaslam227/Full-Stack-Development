const net = require('net');

const server = net.createServer(function(socket) {
  console.log('Client connected');

  socket.on('data', function(data) {
    // Broadcast the data to all connected clients
    server.clients.forEach(function(client) {
      client.write(data);
    });
  });

  // Add the client to the list of connected clients
  server.clients.push(socket);

  // Handle the client disconnecting
  socket.on('end', function() {
    // Remove the client from the list of connected clients
    server.clients.splice(server.clients.indexOf(socket), 1);
    console.log('Client disconnected');
  });
});