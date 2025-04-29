import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

const UserDashboard = () => {
    const socket = io('http://localhost:5000');

    const handleHelpClick = () => {
        console.log('Emitting help event');
        socket.emit('help', { message: 'User needs help!' });
        alert('Help is on the way!');
    };

    useEffect(() => {
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Welcome to Your Dashboard</h1>
            <p>If you need assistance, click the button below:</p>
            <button
                onClick={handleHelpClick}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Help
            </button>
        </div>
    );
};

export default UserDashboard;