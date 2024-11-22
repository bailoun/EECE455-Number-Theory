import React, { useState } from 'react';
import { millerRabin } from '../utils/millerRabin';

const MillerRabinPage: React.FC = () => {
    const [number, setNumber] = useState<string>(''); // Input number as a string
    const [result, setResult] = useState<{ steps: string[]; isPrime: boolean; input: string } | null>(null); // Result and input
    const [showSteps, setShowSteps] = useState(false); // Step visibility toggle

    const handleCalculate = () => {
        if (number && BigInt(number) > 0n) {
            const res = millerRabin(number); // Pass the number as a string
            setResult({ ...res, input: number }); // Store the calculated result and input value
            setShowSteps(false); // Reset step visibility on new calculation
        } else {
            alert('Please enter a valid positive number.');
        }
    };

    return (
        <div style={{ backgroundColor: '#1f2937', minHeight: '100vh', padding: '40px 20px' }}>
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: '800px',
                    backgroundColor: '#2d3748',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                }}
            >
                <h1 style={{ color: '#e2e8f0', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                    Miller-Rabin Primality Test
                </h1>
                <p style={{ color: '#a0aec0', fontSize: '1.2rem', marginBottom: '30px' }}>
                    Enter a number to check if it's prime.
                </p>

                {/* Input Section */}
                <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)} // Accept input as string
                    placeholder="Enter a number"
                    style={{
                        width: '95%',
                        padding: '15px',
                        fontSize: '1.2rem',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        border: '1px solid #4a5568',
                        backgroundColor: '#1a202c',
                        color: '#e2e8f0',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                />
                <button
                    onClick={handleCalculate}
                    style={{
                        width: '100%',
                        padding: '15px',
                        fontSize: '1.2rem',
                        backgroundColor: '#4c51bf',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginBottom: '30px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                        transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#434190')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4c51bf')}
                >
                    Check Primality
                </button>

                {}
                {result && (
                    <div style={{ textAlign: 'left' }}>
                        <div style={{
                            display: 'flex', // Use flexbox to align items on the same line
                            alignItems: 'center', // Vertically align items
                            gap: '10px',
                            marginBottom: '30px'
                        }}>
                            <h2 style={{
                                color: '#e2e8f0',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                margin: 0 // Remove margin to align properly
                            }}>
                                Result:
                            </h2>
                            <p style={{
                                backgroundColor: '#4a5568',
                                color: '#cbd5e0',
                                padding: '10px 20px',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                fontSize: '1.2rem',
                                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                                display: 'inline-block', // Make it fit the content
                                margin: 0 // Remove margin to align properly
                            }}>
                                <strong>{result.input} is {result.isPrime ? 'Prime' : 'Not Prime'}</strong>
                            </p>
                        </div>


                        <button
                            onClick={() => setShowSteps(!showSteps)}
                            style={{
                                width: '100%',
                                padding: '15px',
                                fontSize: '1.2rem',
                                backgroundColor: '#4c51bf',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                marginBottom: '20px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                                transition: 'background-color 0.2s',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#434190')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4c51bf')}
                        >
                            {showSteps ? 'Hide Steps' : 'Show Steps'}
                        </button>

                        {showSteps && (
                            <div
                                style={{
                                    backgroundColor: '#1a202c',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                <h3 style={{ color: '#e2e8f0', fontSize: '1.2rem', marginBottom: '10px' }}>
                                    Steps:
                                </h3>
                                <ul
                                    style={{
                                        listStyle: 'none',
                                        padding: '0',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                    }}
                                >
                                    {result.steps.map((step, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                backgroundColor: '#4a5568',
                                                color: '#cbd5e0',
                                                padding: '10px 15px',
                                                borderRadius: '12px',
                                                fontWeight: 'bold',
                                                fontSize: '1rem',
                                                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                                            }}
                                        >
                                            {index + 1}. {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MillerRabinPage;
