import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Simulations from './pages/Simulations';
import MLmodels from './pages/MLmodels';
import Datasets from './pages/Datasets';

function App() {
    return (
        <Router>
            {/* Navbar is always visible */}
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Dashboard />} /> {/* Main page */}
                    <Route path="/simulations" element={<Simulations />} />
                    <Route path="/mlmodels" element={<MLmodels />} />
                    <Route path="/datasets" element={<Datasets />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;

