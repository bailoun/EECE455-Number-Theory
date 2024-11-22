import React, { useState } from 'react';
import { chineseRemainder } from '../utils/chineseRemainder';

const ChineseRemainderPage: React.FC = () => {
    const [remainders, setRemainders] = useState<string>('');
    const [moduli, setModuli] = useState<string>('');
    const [result, setResult] = useState<{ solution: bigint; modulus: bigint; steps: string[] } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [showSteps, setShowSteps] = useState(false);

    const handleCalculate = () => {
        try {
            const remaindersArray = remainders.split(',').map((num) => parseInt(num.trim(), 10));
            const moduliArray = moduli.split(',').map((num) => parseInt(num.trim(), 10));

            if (remaindersArray.length === 0 || moduliArray.length === 0) {
                throw new Error('Please provide valid inputs for remainders and moduli.');
            }

            const res = chineseRemainder(remaindersArray, moduliArray);
            setResult(res);
            setError(null);
            setShowSteps(false);
        } catch (err: any) {
            setError(err.message);
            setResult(null);
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
                    Chinese Remainder Theorem
                </h1>
                <p style={{ color: '#a0aec0', fontSize: '1.2rem', marginBottom: '30px' }}>
                    Solve simultaneous congruences with the Chinese Remainder Theorem.
                </p>

                {}
                <input
                    type="text"
                    value={remainders}
                    onChange={(e) => setRemainders(e.target.value)}
                    placeholder="Enter remainders (comma-separated)"
                    style={{
                        width: '95%',
                        padding: '10px',
                        fontSize: '1.2rem',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        border: '1px solid #4a5568',
                        backgroundColor: '#1a202c',
                        color: '#e2e8f0',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                />
                <input
                    type="text"
                    value={moduli}
                    onChange={(e) => setModuli(e.target.value)}
                    placeholder="Enter moduli (comma-separated)"
                    style={{
                        width: '95%',
                        padding: '10px',
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
                    Calculate
                </button>

                {}
                {result && (
                    <div style={{ color: '#e2e8f0', textAlign: 'left', marginTop: '20px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '30px',
                        }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                margin: 0
                            }}>Result:</h2>
                            <p style={{
                                backgroundColor: '#4a5568',
                                color: '#cbd5e0',
                                padding: '10px 20px',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                fontSize: '1.2rem',
                                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                                display: 'inline-block',
                                margin: 0
                            }}>
                                <strong>x ≡ {result.solution.toString()} (mod {result.modulus.toString()})</strong>
                            </p>
                        </div>

                        <button
                            onClick={() => setShowSteps(!showSteps)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '1.2rem',
                                backgroundColor: '#4c51bf',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                marginBottom: '10px',
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
                                    padding: '20px',
                                    borderRadius: '8px',
                                    marginTop: '10px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <h3 style={{ color: '#e2e8f0', fontSize: '1.2rem', marginBottom: '10px' }}>Steps:</h3>
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
                                                backgroundColor: '#2d3748',
                                                color: '#e2e8f0',
                                                padding: '10px',
                                                borderRadius: '8px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {}
                {error && (
                    <div style={{ color: '#f56565', fontSize: '1.2rem', marginTop: '20px' }}>
                        Error: {error}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChineseRemainderPage;
