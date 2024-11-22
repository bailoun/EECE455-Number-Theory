import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: '#1f2937', minHeight: '100vh', padding: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '9%' }}>
            </div>

            {/* Rectangular Areas */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                {/* Shared Style */}
                {[
                    { label: 'Prime Factorization', route: '/prime-factorization' },
                    { label: 'Totient Function', route: '/totient-function' },
                    { label: 'Miller-Rabin', route: '/miller-rabin' },
                    { label: 'Fast Exponentiation', route: '/fast-exponentiation' },
                    { label: 'Chinese Remainder Theorem', route: '/chinese-remainder' },
                ].map((item, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#2d3748',
                            width: '300px',
                            height: '150px',
                            padding: '20px',
                            borderRadius: '12px',
                            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <h2 style={{ color: '#cbd5e0', fontSize: '1.5rem', marginBottom: '10px', textAlign: 'center' }}>
                            {item.label}
                        </h2>
                        <button
                            onClick={() => navigate(item.route)}
                            style={{
                                padding: '15px 30px',
                                fontSize: '1.2rem',
                                backgroundColor: '#4c51bf',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                transition: 'background-color 0.2s',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#434190')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4c51bf')}
                        >
                            Go
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
