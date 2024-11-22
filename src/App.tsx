import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrimeFactorizationPage from './pages/PrimeFactorizationPage';
import TotientFunctionPage from './pages/TotientFunctionPage';
import MillerRabinPage from './pages/MillerRabinPage';
import FastExponentiationPage from './pages/FastExponentiationPage';
import ChineseRemainderPage from './pages/ChineseRemainderPage';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/prime-factorization" element={<PrimeFactorizationPage />} />
                <Route path="/totient-function" element={<TotientFunctionPage />} />
                <Route path="/miller-rabin" element={<MillerRabinPage />} />
                <Route path="/fast-exponentiation" element={<FastExponentiationPage />} />
                <Route path="/chinese-remainder" element={<ChineseRemainderPage />} />
            </Routes>
        </>
    );
};

export default App;
