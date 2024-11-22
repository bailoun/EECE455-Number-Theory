import React, { useState } from 'react';
import { fastExponentiation } from '../utils/fastExponentiation';

const FastExponentiationPage: React.FC = () => {
    const [base, setBase] = useState<number | ''>('');
    const [exponent, setExponent] = useState<number | ''>('');
    const [modulus, setModulus] = useState<number | ''>('');
    const [result, setResult] = useState<{ steps: string[]; result: number } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [showSteps, setShowSteps] = useState(false);

    const handleCalculate = () => {
        try {
            if (base !== '' && exponent !== '' && modulus !== '' && modulus > 0) {
                const res = fastExponentiation(Number(base), Number(exponent), Number(modulus));
                setResult(res);
                setShowSteps(false);
                setError(null);
            } else {
                alert('Please enter valid positive integers for base, exponent, and modulus.');
            }
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
                    Fast Exponentiation
                </h1>
                <p style={{ color: '#a0aec0', fontSize: '1.2rem', marginBottom: '30px' }}>
                    Compute `(base^exponent) % modulus` efficiently.
                </p>

                {}
                <input
                    type="number"
                    value={base}
                    onChange={(e) => setBase(Number(e.target.value))}
                    placeholder="Base"
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
                    type="number"
                    value={exponent}
                    onChange={(e) => setExponent(Number(e.target.value))}
                    placeholder="Exponent"
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
                    type="number"
                    value={modulus}
                    onChange={(e) => setModulus(Number(e.target.value))}
                    placeholder="Modulus"
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
                    <div style={{ textAlign: 'left', marginTop: '20px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '30px'
                        }}>
                            <h2 style={{
                                color: '#e2e8f0',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                margin: 0
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
                                display: 'inline-block',
                                margin: 0
                            }}>
                                <strong>{result.result}</strong>
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

                        {}
                        {showSteps && (
                            <div
                                style={{
                                    backgroundColor: '#1a202c',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    marginTop: '10px',
                                }}
                            >
                                <h3 style={{ color: '#e2e8f0', fontSize: '1.2rem', marginBottom: '10px' }}>Steps:</h3>
                                <ul style={{ listStyle: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {result.steps.map((step, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                backgroundColor: '#2d3748',
                                                padding: '10px',
                                                borderRadius: '8px',
                                                color: '#a0aec0',
                                                fontSize: '1rem',
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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

export default FastExponentiationPage;
