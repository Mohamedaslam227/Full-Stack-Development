const net = require('net');

const PORT = 3008;
const server = net.createServer();

const clients = [];

server.on('connection', (socket) => {
    console.log('New client connected');

    clients.push(socket);

    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log(`Received message: ${message}`);

        clients.forEach((client) => {
            if (client !== socket) {
                client.write(`Client: ${message}\n`);
            }
        });
    });

    socket.on('end', () => {
        console.log('Client disconnected');
        const index = clients.indexOf(socket);
        if (index !== -1) {
            clients.splice(index, 1);
        }
    });

    socket.on('error', (err) => {
        console.error('Socket error:', err.message);
    });
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
