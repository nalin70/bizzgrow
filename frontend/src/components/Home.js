import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleUserLogin = () => {
        navigate('/userlogin');
    };

    const handleOperatorLogin = () => {
        navigate('/operatorlogin');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome</h1>
            <div style={{ marginTop: '20px' }}>
                <button 
                    onClick={handleUserLogin} 
                    style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px' }}
                >
                    User Login
                </button>
                <button 
                    onClick={handleOperatorLogin} 
                    style={{ padding: '10px 20px', fontSize: '16px' }}
                >
                    Operator Login
                </button>
            </div>
        </div>
    );
};

export default Home;