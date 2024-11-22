import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header style={{
            backgroundColor: '#4c51bf',
            color: 'white',
            padding: '15px 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        }}>
            <h1
                style={{
                    margin: 0,
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                }}
                onClick={() => navigate('/')} // Navigates to Home when clicked
            >
                Number Theory Calculator
            </h1>
        </header>
    );
};

export default Header;
