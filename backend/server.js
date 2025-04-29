const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http'); // Required for socket.io
const { Server } = require('socket.io'); // Import socket.io

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create HTTP server and attach socket.io
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', // Allow requests from the frontend
        methods: ['GET', 'POST'],
    },
});

// WebSocket connection
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for "help" events from the user dashboard
    socket.on('help', (data) => {
        console.log('Help request received:', data);

        // Broadcast the "help" event to all connected operator dashboards
        io.emit('helpRequest', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

// Routes
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});