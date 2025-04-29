import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const OperatorDashboard = () => {
    const [helpRequests, setHelpRequests] = useState([]);
    const socket = io('http://localhost:5000');

    useEffect(() => {
    // Log connection status
    socket.on('connect', () => {
        console.log('Connected to WebSocket server:', socket.id);
    });

    // Listen for "helpRequest" events from the server
    socket.on('helpRequest', (data) => {
        console.log('Help request received:', data);
        setHelpRequests((prevRequests) => [...prevRequests, data]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
        socket.disconnect();
    };
}, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Operator Dashboard</h1>
            <h2>Help Requests</h2>
            {helpRequests.length === 0 ? (
                <p>No help requests yet.</p>
            ) : (
                <ul>
                    {helpRequests.map((request, index) => (
                        <li key={index}>
                            {request.message} (Received at: {new Date().toLocaleTimeString()})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OperatorDashboard;